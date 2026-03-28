const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const helmet = require('helmet');
const { sequelize } = require('./config/db');
const logger = require('./utils/logger');

// Load environment variables
dotenv.config();

// Import models to ensure relationships are established
require('./models');

const app = express();

// Trust Proxy (Essential for Rate Limiting in Production behind Render/Vercel)
app.set('trust proxy', 1);

// Middleware - Enhanced CORS Configuration
const allowedOrigins = [process.env.FRONTEND_URL || 'http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5500', 'http://127.0.0.1:5500'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

// Add Helmet for HTTP header security
app.use(helmet());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());

// Rate Limiting
const { apiLimiter, authLimiter } = require('./middleware/rateLimiter');
app.use('/api/', apiLimiter);
app.use(['/api/users/login', '/api/users/register', '/api/admin/login'], authLimiter);

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/games', require('./routes/gameRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

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

        // Sync models (Using alter: true to preserve data and update schema safely)
        await sequelize.sync({ alter: true });
        logger.info('✅ Models synced with database.');

        // Ensure Admin exists on startup
        const User = require('./models/User');
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPass = process.env.ADMIN_PASSWORD;

        if (adminEmail && adminPass) {
            const [adminUser, adminCreated] = await User.findOrCreate({
                where: { role: 'admin' }, // Check by role so email can change without creating new admins
                defaults: { email: adminEmail, password: adminPass, username: 'Red Zone Admin', role: 'admin' }
            });
            
            if (adminCreated) {
                logger.info(`✅ Admin credentials created for: ${adminEmail}`);
            } else {
                logger.info(`✅ Admin account exists. Access preserved.`);
            }
        } else {
            logger.warn('⚠️ ADMIN_EMAIL or ADMIN_PASSWORD not found in .env. Skipping default admin creation.');
        }

        // Auto-Seed: Update games/prices on server start
        // This ensures the DB is always up-to-date without manual scripts
        logger.info('🔄 Checking for new game data...');
        await seedDB();

        // Start listening
        app.listen(PORT, '0.0.0.0', () => {
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

startServer();
