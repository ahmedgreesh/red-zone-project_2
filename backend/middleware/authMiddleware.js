/**
 * authMiddleware.js
 *
 * Two middleware functions:
 *   protect   — validates any token and attaches req.user
 *   adminOnly — allows access only when req.user.role === 'admin'
 *
 * Currently uses simpleToken (no JWT dependency).
 * To switch to JWT: update utils/simpleToken.js only.
 */

const { verifyToken } = require('../utils/simpleToken');
const User = require('../models/User');

/**
 * protect — Authentication middleware
 *
 * Reads the Bearer token from the Authorization header,
 * verifies it, looks up the user from the DB, and attaches
 * the user object to req.user so downstream handlers can use it.
 */
const protect = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    const token = authHeader.split(' ')[1];

    // verifyToken returns { id, role } or null
    const decoded = verifyToken(token);

    if (!decoded) {
        return res.status(401).json({ message: 'Not authorized, token is invalid' });
    }

    try {
        // Handle the static admin token (id === 'admin-static')
        if (decoded.id === 'admin-static' && decoded.role === 'admin') {
            req.user = { id: 'admin-static', role: 'admin', email: 'admin@redzone.com' };
            return next();
        }

        // Fetch full user from DB (exclude password)
        const user = await User.findByPk(decoded.id, {
            attributes: { exclude: ['password'] }
        });

        if (!user) {
            return res.status(401).json({ message: 'User not found, please log in again' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('[Auth Middleware] Error:', error);
        return res.status(401).json({ message: 'Not authorized, token verification failed' });
    }
};

/**
 * adminOnly — Authorization middleware
 *
 * Must be used AFTER protect.
 * Allows the request to proceed only if req.user.role === 'admin'.
 * Returns 403 Forbidden otherwise.
 */
const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        return next();
    }
    return res.status(403).json({ message: 'Forbidden: Admin access required' });
};

// Keep legacy export name "admin" for backward compatibility with existing routes
module.exports = { protect, admin: adminOnly, adminOnly };
