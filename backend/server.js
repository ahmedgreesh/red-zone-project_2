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
    logger.warn('⚠️ WARNING: JWT_SECRET is missing or insecure. Auth will fail.');
}

// Import models to ensure relationships are established
require('./models');

const app = express();

// Request Timeout (30 seconds)
app.use(timeout('30s'));
app.use((req, res, next) => {
    if (!req.timedout) next();
});

// Trust Proxy (required for rate limiting behind Vercel)
app.set('trust proxy', 1);

// Enhanced CORS Configuration
const allowedOrigins = [
    process.env.FRONTEND_URL || 'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://localhost:5500',
    'http://127.0.0.1:5500'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || origin === 'null') return callback(null, true);
        const isVercel = origin.endsWith('.vercel.app');
        const isLocal = (
            origin.startsWith('http://localhost:') ||
            origin.startsWith('http://127.0.0.1:') ||
            origin.startsWith('http://192.168.') ||
            origin.startsWith('http://10.0.')
        );
        if (allowedOrigins.includes(origin) || isVercel || isLocal) {
            callback(null, true);
        } else {
            logger.warn(`[CORS REJECT] Origin blocked: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

// Security Headers
app.use(helmet({
    contentSecurityPolicy: false,
    frameguard: { action: 'deny' },
    hidePoweredBy: true,
    crossOriginResourcePolicy: false,
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());

// Rate Limiting
const { globalLimiter, loginLimiter, adminLimiter } = require('./middleware/rateLimiter');
app.use(globalLimiter);
app.use(['/api/users/login', '/api/users/register', '/api/admin/login'], loginLimiter);
app.use('/api/admin', adminLimiter);
// Connection Check & Sync Middleware for Serverless
let isSynced = false;
app.use(async (req, res, next) => {
    try {
        if (!isSynced) {
            await sequelize.authenticate();
            // In production, we sync once per cold start to ensure tables exist
            await sequelize.sync(); 
            isSynced = true;
            logger.info('✅ DB initialized (Serverless).');
        }
        next();
    } catch (error) {
        logger.error('❌ DB connection error in middleware: %O', error);
        res.status(500).json({ 
            success: false, 
            message: 'Database connection failed. Please check your DATABASE_URL.',
            error: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/games', require('./routes/gameRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Global Error Handling
const errorMiddleware = require('./middleware/errorMiddleware');
app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Red Zone API is running...');
});

// Export app (for Vercel serverless)
module.exports = app;

// ---------- Initialization ----------
const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';
const { seedDB } = require('./seed');

const initializeDatabase = async () => {
    await sequelize.authenticate();
    logger.info('✅ Database Connected.');

    if (!isProduction) {
        // Local development: sync with alter to update schema
        await sequelize.sync({ alter: true });
        logger.info('✅ Models synced (dev).');

        // Ensure Admin exists
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
                logger.info(`✅ Admin created for: ${adminEmail}`);
            } else {
                adminUser.role = 'admin';
                adminUser.isActive = true;
                await adminUser.save();
                logger.info('✅ Admin verified.');
            }
        }

        // Seed games in dev
        logger.info('🔄 Seeding game data...');
        await seedDB();
        logger.info('✅ Seed complete.');
    } else {
        // Production (Vercel): only sync structure, no alter, no seed on cold start
        // Tables already exist in Supabase. Minimal DB ops to preserve connections.
        await sequelize.sync();
        logger.info('✅ Models synced (prod).');
    }
};

// Global Error Handlers
process.on('unhandledRejection', (reason, promise) => {
    logger.error('⚠️ Unhandled Rejection: %O', reason);
});
process.on('uncaughtException', (error) => {
    logger.error('❌ Uncaught Exception: %O', error);
});

// For local development, start the server
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    const PORT = process.env.PORT || 5000;
    sequelize.authenticate()
        .then(() => sequelize.sync({ alter: true }))
        .then(() => {
            app.listen(PORT, '0.0.0.0', () => {
                logger.info(`🚀 Local development server running on port ${PORT}`);
            });
        })
        .catch(err => {
            logger.error('❌ Local Startup Error: %O', err);
            process.exit(1);
        });
}

// Graceful Shutdown
const gracefulShutdown = async (signal) => {
    logger.info(`📡 ${signal} received. Shutting down...`);
    if (server) {
        server.close(async () => {
            await sequelize.close().catch(err => logger.error('❌ DB close error: %O', err));
            logger.info('🛑 Server shut down.');
            process.exit(0);
        });
        setTimeout(() => process.exit(1), 10000);
    } else {
        process.exit(0);
    }
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT',  () => gracefulShutdown('SIGINT'));
