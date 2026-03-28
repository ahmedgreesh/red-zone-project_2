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
    max: process.env.NODE_ENV === 'development' ? 1000 : 100, // much higher in dev
    message: {
        status: 429,
        message: 'عدد الطلبات كبير جداً، يرجى المحاولة لاحقاً (Too many requests, please try again later)'
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    skip: (req) => process.env.NODE_ENV === 'development' && req.headers['x-dev-bypass'] === 'true'
});

// Auth Limiter: 5 attempts per 15 minutes (for Login/Register)
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: process.env.NODE_ENV === 'development' ? 100 : 5, // 100 in dev, 5 in prod
    message: {
        status: 429,
        message: 'محاولات دخول كثيرة خاطئة، يرجى المحاولة بعد 15 دقيقة (Too many login attempts, please try again in 15 mins)'
    },
    standardHeaders: true,
    legacyHeaders: false
});

module.exports = { apiLimiter, authLimiter };
