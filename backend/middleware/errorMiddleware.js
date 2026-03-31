const logger = require('../utils/logger');

/**
 * Global Error Handling Middleware
 */
const errorMiddleware = (err, req, res, next) => {
    // Log the error for the developer (using the professional logger we checked earlier)
    logger.error('❌ Global Error: %O', {
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
        path: req.path,
        method: req.method,
    });

    // Default status code and message
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    // Professional JSON response format
    res.status(statusCode).json({
        success: false,
        message: message,
        error: process.env.NODE_ENV === 'development' ? err.stack : (err.name || 'Error')
    });
};

module.exports = errorMiddleware;
