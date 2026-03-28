const User = require('../models/User');
const { generateToken, generateRefreshToken } = require('../utils/generateToken');
const logger = require('../utils/logger');

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExists = await User.findOne({ where: { email } });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({
            email,
            password
        });

        if (user) {
            const token = generateToken(user.id);
            res.status(201)
                .cookie('token', token, {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'Lax'
                })
                .json({
                    _id: user.id,
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    avatar: user.avatar,
                    role: user.role,
                    token: token
                });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        logger.error('[registerUser] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
    }
};

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
    let { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).json({ message: 'الرجاء إدخال البريد الإلكتروني وكلمة المرور' });
    }

    // Trim inputs to prevent space errors
    email = email.trim();
    password = password.trim();

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'هذا البريد الإلكتروني غير مسجل (Email not found)' });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            logger.warn('[AUTH] Failed login attempt due to password mismatch.');
            return res.status(401).json({ message: 'كلمة السر غير صحيحة (Wrong password)' });
        }

        logger.info('[AUTH] User authenticated successfully.');

        const token = generateToken(user.id);
        res.cookie('token', token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Lax'
        }).json({
            _id: user.id,
            id: user.id,
            email: user.email,
            username: user.username,
            avatar: user.avatar,
            role: user.role,
            token: token
        });
    } catch (error) {
        logger.error('[loginUser] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
    }
};

// @desc    Logout user & clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = async (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0),
        httpOnly: true
    }).json({ message: 'Logged out successfully' });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: { exclude: ['password'] }
        });

        if (user) {
            res.json({
                _id: user.id,
                id: user.id,
                email: user.email,
                username: user.username,
                avatar: user.avatar,
                role: user.role,
                wishlist: user.wishlist
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        logger.error('[getUserProfile] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
    }
};

// @desc    Update user wishlist
// @route   PUT /api/users/wishlist
// @access  Private
const updateWishlist = async (req, res) => {
    const { gameId, action } = req.body; // action: 'add' or 'remove'

    try {
        const user = await User.findByPk(req.user.id);

        if (user) {
            let wishlist = user.wishlist || [];

            if (action === 'add') {
                // Add to wishlist if not already present
                if (!wishlist.includes(gameId)) {
                    wishlist.push(gameId);
                }
            } else if (action === 'remove') {
                // Remove from wishlist
                wishlist = wishlist.filter(id => id !== gameId);
            }

            user.wishlist = wishlist;
            await user.save();

            res.json({
                success: true,
                wishlist: user.wishlist
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        logger.error('[updateWishlist] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
    }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findByPk(req.user.id);

        if (user) {
            if (email) user.email = email;
            if (password) user.password = password;
            if (req.body.username) user.username = req.body.username;
            if (req.body.avatar) user.avatar = req.body.avatar;

            await user.save();

            res.json({
                _id: user.id,
                id: user.id,
                email: user.email,
                username: user.username,
                avatar: user.avatar,
                role: user.role,
                wishlist: user.wishlist
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        logger.error('[updateUserProfile] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
    }
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateWishlist,
    updateUserProfile
};
