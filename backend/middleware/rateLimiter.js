const rateLimit = require('express-rate-limit');

/**
 * rateLimiter.js
 * 
 * Provides rate limiting for API and Auth routes.
 * Uses express-rate-limit.
 */

// Global API Limiter: 100 requests per 15 minutes
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: process.env.NODE_ENV === 'development' ? 1000 : 100,
    message: {
        status: 429,
        message: 'عدد الطلبات كبير جداً، يرجى المحاولة لاحقاً'
    },
    standardHeaders: true,
    legacyHeaders: false
});

// Stricter Auth/Login Limiter: 5 attempts per 1 minute
const loginLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: process.env.NODE_ENV === 'development' ? 100 : 5,
    message: {
        status: 429,
        message: 'محاولات دخول كثيرة، يرجى المحاولة بعد دقيقة واحده'
    },
    standardHeaders: true,
    legacyHeaders: false
});

// Admin Route Limiter: 15 requests per 1 minute
const adminLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: process.env.NODE_ENV === 'development' ? 500 : 15,
    message: {
        status: 429,
        message: 'طلبات إدارية كثيرة، يرجى الهدوء قليلاً'
    },
    standardHeaders: true,
    legacyHeaders: false
});

module.exports = { apiLimiter, authLimiter: loginLimiter, loginLimiter, adminLimiter };
