const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const { sequelize } = require('./config/db');

// Load environment variables
dotenv.config();

// Import models to ensure relationships are established
require('./models');

const app = express();

// Trust Proxy (Essential for Rate Limiting in Production behind Render/Vercel)
app.set('trust proxy', 1);

// Middleware - Enhanced CORS Configuration
app.use(cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

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
        console.log('✅ Database Connected successfully.');

        // Sync models (Using alter: true to preserve data and update schema safely)
        await sequelize.sync({ alter: true });
        console.log('✅ Models synced with database.');

        // Ensure Admin exists on startup
        const User = require('./models/User');
        const [adminUser, adminCreated] = await User.findOrCreate({
            where: { email: 'admin@redzone.com' },
            defaults: { email: 'admin@redzone.com', password: 'redzoneaa3692053', username: 'Red Zone Admin', role: 'admin' }
        });
        
        if (!adminCreated) {
            adminUser.password = 'redzoneaa3692053';
            adminUser.role = 'admin';
            await adminUser.save();
        }
        console.log('✅ Admin credentials ensured: redzoneaa3692053');

        // Auto-Seed: Update games/prices on server start
        // This ensures the DB is always up-to-date without manual scripts
        console.log('🔄 Checking for new game data...');
        await seedDB();

        // Start listening
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('❌ Server Startup Error:', error);
        process.exit(1);
    }
};

// Global Error Handlers to prevent server crash
process.on('unhandledRejection', (reason, promise) => {
    console.error('⚠️ Unhandled Rejection at:', promise, 'reason:', reason);
    // Don't exit the process
});

process.on('uncaughtException', (error) => {
    console.error('❌ Uncaught Exception:', error);
    // Optional: exit if the error is critical, but logging helps debug
});

startServer();
