/**
 * simpleToken.js — Lightweight token system (JWT-ready)
 *
 * HOW TO UPGRADE TO JWT LATER:
 *   1. npm install jsonwebtoken
 *   2. Replace the body of generateToken() and verifyToken() below
 *      with jwt.sign() / jwt.verify() calls.
 *   3. Nothing else in the project needs to change.
 *
 * Token format right now:  "rz-<role>-<userId>"
 * Example admin token:     "rz-admin-42"
 * Example user token:      "rz-user-7"
 */

/**
 * Generate a simple token that encodes the role and user id.
 * @param {string|number} userId
 * @param {string} role  "admin" | "user"
 * @returns {string}
 */
function generateToken(userId, role) {
    // ── JWT UPGRADE POINT ──────────────────────────────────────────────────
    // const jwt = require('jsonwebtoken');
    // return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    // ────────────────────────────────────────────────────────────────────────
    return `rz-${role}-${userId}`;
}

/**
 * Decode and validate a simple token.
 * Returns { id, role } on success, null on failure.
 * @param {string} token
 * @returns {{ id: string, role: string } | null}
 */
function verifyToken(token) {
    // ── JWT UPGRADE POINT ──────────────────────────────────────────────────
    // const jwt = require('jsonwebtoken');
    // try {
    //     return jwt.verify(token, process.env.JWT_SECRET); // returns { id, role, ... }
    // } catch (e) {
    //     return null;
    // }
    // ────────────────────────────────────────────────────────────────────────

    if (!token || typeof token !== 'string') return null;

    const parts = token.split('-');
    // Expected: ["rz", "<role>", "<userId>"]
    if (parts.length < 3 || parts[0] !== 'rz') return null;

    const role = parts[1];           // "admin" or "user"
    const id   = parts.slice(2).join('-'); // handle UUIDs that contain "-"

    if (!role || !id) return null;

    return { id, role };
}

module.exports = { generateToken, verifyToken };
