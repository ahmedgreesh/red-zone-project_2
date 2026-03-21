const { sequelize } = require('./config/db');
require('./models'); // Load models and associations

const syncLocal = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connected to database.');

        // Force sync to drop and recreate all tables
        await sequelize.sync({ force: true });
        console.log('✅ Database schema forced sync complete (all tables dropped and recreated).');

        process.exit(0);
    } catch (error) {
        console.error('❌ Sync failed:', error);
        process.exit(1);
    }
};

syncLocal();
