// Vercel Serverless Entry Point
// Explicitly require pg/pg-hstore so Vercel's bundler (nft) includes them.
// Sequelize loads these via dynamic require() which static analysis misses.
require('pg');
require('pg-hstore');

const app = require('../backend/server');

module.exports = app;
