const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config();

// In serverless environments (Vercel), each function invocation may be a new
// process. Using a large connection pool exhausts Supabase session-mode limits.
// We use pool.max = 2 in production to stay within connection limits.
const poolConfig = process.env.NODE_ENV === 'production'
    ? { max: 2, min: 0, acquire: 30000, idle: 10000 }
    : { max: 5, min: 0, acquire: 30000, idle: 10000 };

let sequelize;

if (process.env.DATABASE_URL) {
    // Option 1: Use full connection string (Supabase / production)
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        dialectOptions: {
            ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
        },
        pool: poolConfig,
        logging: false
    });
} else if (process.env.DB_HOST) {
    // Option 2: Use individual credentials
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASS,
        {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT || 5432,
            dialect: 'postgres',
            dialectOptions: {
                ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
            },
            pool: poolConfig,
            logging: false
        }
    );
} else {
    // Option 3: Fallback to SQLite for local development
    sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: path.join(__dirname, '../database.sqlite'),
        logging: false
    });
}


module.exports = { sequelize };
