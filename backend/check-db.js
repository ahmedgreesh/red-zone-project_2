const { sequelize } = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();

const checkTables = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connection has been established successfully.');

        const [results] = await sequelize.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public'");
        console.log('Tables in database:', results.map(r => r.table_name));

        await sequelize.close();
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
    }
};

checkTables();
