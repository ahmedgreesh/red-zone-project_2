/**
 * generateToken.js — Kept for backward compatibility with userController.js
 *
 * Delegates to simpleToken so there is ONE token system across the app.
 * When you upgrade to JWT, update only utils/simpleToken.js.
 */

const { generateToken: _generateToken } = require('./simpleToken');

/**
 * Generate a token for a regular user.
 * @param {string|number} id — user id
 * @returns {string}
 */
const generateToken = (id) => {
    return _generateToken(id, 'user');
};

/**
 * Refresh token is kept for API compatibility.
 * Currently returns the same as generateToken (no separate refresh in simple mode).
 * Replace this with a real refresh token when upgrading to JWT.
 * @param {string|number} id
 * @returns {string}
 */
const generateRefreshToken = (id) => {
    return _generateToken(id, 'user');
};

module.exports = { generateToken, generateRefreshToken };
