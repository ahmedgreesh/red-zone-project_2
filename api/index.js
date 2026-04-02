// Vercel Serverless Entry Point
// This file exports the Express app for Vercel to handle as a serverless function.
// The DB initialization (sequelize.sync, admin creation, seeding) runs automatically
// when server.js is imported, via the conditional at the bottom of server.js.

const app = require('../backend/server');

module.exports = app;
