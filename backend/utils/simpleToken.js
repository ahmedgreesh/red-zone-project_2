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
        console.warn('⚠️ WARNING: JWT_SECRET is not defined in .env! Using legacy logic.');
        return `rz-${role}-${userId}`;
    }
    return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

/**
 * Decode and validate a JWT token.
 * Returns { id, role } on success, null on failure.
 * @param {string} token
 * @returns {{ id: string, role: string } | null}
 */
function verifyToken(token) {
    if (!token || typeof token !== 'string') return null;

    // For smooth transition: handle legacy string-based tokens if they don't look like JWTs
    if (!token.includes('.')) {
        const parts = token.split('-');
        if (parts.length >= 3 && parts[0] === 'rz') {
            const role = parts[1];
            const id = parts.slice(2).join('-');
            return { id, role };
        }
        return null;
    }

    try {
        if (!process.env.JWT_SECRET) return null;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return { id: decoded.id, role: decoded.role };
    } catch (e) {
        console.error('[Token Verify] Token is invalid or expired:', e.message);
        return null;
    }
}

module.exports = { generateToken, verifyToken };

