const express = require('express');
require('express-async-errors');
const timeout = require('connect-timeout');
const cors = require('cors');


const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const helmet = require('helmet');
const { sequelize } = require('./config/db');
const logger = require('./utils/logger');

// Load environment variables
dotenv.config();

// CRITICAL SECURITY CHECK: JWT_SECRET MUST BE DEFINED
if (!process.env.JWT_SECRET || process.env.JWT_SECRET === 'your_jwt_secret_here') {
    logger.error('❌ FATAL: JWT_SECRET is missing or insecure. Server cannot start.');
    process.exit(1);
}

// Import models to ensure relationships are established
require('./models');

const app = express();

// Request Timeout (30 seconds)
app.use(timeout('30s'));

// Middleware to check for request timeout
app.use((req, res, next) => {
    if (!req.timedout) next();
});

// Trust Proxy

app.set('trust proxy', 1);

// Middleware - Enhanced CORS Configuration
const allowedOrigins = [process.env.FRONTEND_URL || 'http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5500', 'http://127.0.0.1:5500'];

app.use(cors({
    origin: function (origin, callback) {
        // Allow mobile testing on local network and any localhost port
        const isLocalDevelopment = origin && (
            origin.startsWith('http://localhost:') || 
            origin.startsWith('http://127.0.0.1:') || 
            origin.startsWith('http://192.168.') || 
            origin.startsWith('http://10.0.')
        );

        if (!origin || origin === 'null' || allowedOrigins.includes(origin) || (isLocalDevelopment && process.env.NODE_ENV !== 'production')) {
            callback(null, true);
        } else {
            console.error(`[CORS REJECT] Origin blocked: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

// Robust Security Headers with Helmet
app.use(helmet({
    contentSecurityPolicy: false, // Disabled as requested for compatibility
    frameguard: { action: 'deny' }, // X-Frame-Options: DENY (Prevents Clickjacking)
    hidePoweredBy: true, // X-Powered-By removed
    crossOriginResourcePolicy: false,
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());

// Apply Global Rate Limiting to all routes
const { globalLimiter, loginLimiter, adminLimiter } = require('./middleware/rateLimiter');
app.use(globalLimiter);

// Specific Rate Limiting Strategy for sensitive routes
app.use(['/api/users/login', '/api/users/register', '/api/admin/login'], loginLimiter);
app.use('/api/admin', adminLimiter);


// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/games', require('./routes/gameRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Global Error Handling Middleware (Must be after all routes)
const errorMiddleware = require('./middleware/errorMiddleware');
app.use(errorMiddleware);

app.get('/', (req, res) => {

    res.send('Red Zone API is running...');
});

// Port configuration
const PORT = process.env.PORT || 5000;

const { seedDB } = require('./seed');

// Start server - this is the ONLY place that authenticates, syncs, and starts the server
const startServer = async () => {
    try {
        // Authenticate connection
        await sequelize.authenticate();
        logger.info('✅ Database Connected successfully.');

        // Sync models (conditional sync for production safety)
        if (process.env.NODE_ENV !== 'production') {
            await sequelize.sync({ alter: true });
        } else {
            await sequelize.sync();
        }
        logger.info('✅ Models synced with database.');

        // Ensure Admin exists on startup (SECURE: Based on Email)
        const User = require('./models/User');
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPass = process.env.ADMIN_PASSWORD;

        if (adminEmail && adminPass) {
            const [adminUser, adminCreated] = await User.findOrCreate({
                where: { email: adminEmail.trim() },
                defaults: { 
                    email: adminEmail.trim(), 
                    password: adminPass.trim(), 
                    username: 'Red Zone Admin', 
                    role: 'admin',
                    isActive: true
                }
            });
            
            if (adminCreated) {
                logger.info(`✅ Admin credentials created for: ${adminEmail}`);
            } else {
                // Ensure existing admin is active and role is correct
                adminUser.role = 'admin';
                adminUser.isActive = true;
                await adminUser.save();
                logger.info(`✅ Admin account verified. Access preserved.`);
            }
        } else {
            logger.warn('⚠️ ADMIN_EMAIL or ADMIN_PASSWORD not found in .env. Skipping default admin creation.');
        }

        // Auto-Seed: Update games/prices on server start
        logger.info('🔄 Checking for new game data...');
        await seedDB();

        // Start listening
        return app.listen(PORT, '0.0.0.0', () => {
            logger.info(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        logger.error('❌ Server Startup Error: %O', error);
        process.exit(1);
    }
};


// Global Error Handlers to prevent server crash
process.on('unhandledRejection', (reason, promise) => {
    logger.error('⚠️ Unhandled Rejection at: %O, reason: %O', promise, reason);
    // Don't exit the process
});

process.on('uncaughtException', (error) => {
    logger.error('❌ Uncaught Exception: %O', error);
    // Optional: exit if the error is critical, but logging helps debug
});

let server;
startServer().then(s => server = s);

// Graceful Shutdown Handler
const gracefulShutdown = async (signal) => {
    logger.info(`📡 ${signal} received. Starting graceful shutdown...`);
    
    if (server) {
        server.close(async () => {
            logger.info('🛑 HTTP server closed.');
            
            try {
                await sequelize.close();
                logger.info('🗄️ Database connection closed.');
                process.exit(0);
            } catch (err) {
                logger.error('❌ Error during database closure: %O', err);
                process.exit(1);
            }
        });
        
        // Force close after 10s if graceful shutdown fails
        setTimeout(() => {
            logger.error('⚠️ Could not close connections in time, forcefully shutting down');
            process.exit(1);
        }, 10000);
    } else {
        process.exit(0);
    }
};

// Listen for termination signals
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

