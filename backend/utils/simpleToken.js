/**
 * simpleToken.js — Upgraded to JWT
 *
 * This file handles signed token generation and verification using jsonwebtoken.
 */

const jwt = require('jsonwebtoken');

/**
 * Generate a signed JWT token.
 * @param {string|number} userId
 * @param {string} role  "admin" | "user"
 * @returns {string}
 */
function generateToken(userId, role) {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined in environment variables');
    }
    return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

/**
 * Decode and validate a JWT token.
 * Returns { id, role } on success, null on failure.
 * @param {string} token
 * @returns {{ id: string, role: string } | null}
 */
function verifyToken(token) {
    if (!token || typeof token !== 'string') return null;

    try {
        if (!process.env.JWT_SECRET) return null;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return { id: decoded.id, role: decoded.role };
    } catch (e) {
        // Optional: log to a file instead, or use winston if imported
        console.error('[Token Verify] Token is invalid or expired:', e.message);
        return null;
    }
}

module.exports = { generateToken, verifyToken };

