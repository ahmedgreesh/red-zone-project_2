const cache = new Map();

/**
 * In-Memory Caching Middleware
 * @param {number} duration - Cache duration in seconds
 */
const cacheMiddleware = (duration = 60) => {
    return (req, res, next) => {
        // Only cache GET requests
        if (req.method !== 'GET') {
            return next();
        }

        const key = req.originalUrl || req.url;
        const cachedResponse = cache.get(key);

        if (cachedResponse && cachedResponse.expiresAt > Date.now()) {
            return res.status(200).json(cachedResponse.data);
        }

        // Override res.json to capture and cache the response
        const originalJson = res.json;
        res.json = (data) => {
            // Save to cache before sending
            cache.set(key, {
                data: data,
                expiresAt: Date.now() + duration * 1000
            });
            return originalJson.call(res, data);
        };

        next();
    };
};

module.exports = cacheMiddleware;
