const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, getUserProfile, updateWishlist, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const { body, validationResult } = require('express-validator');

// Validation & Sanitization middleware
const validateAuth = [
    body('email')
        .isEmail().withMessage('يجب إدخال بريد إلكتروني صحيح')
        .normalizeEmail()
        .trim(),
    body('password')
        .isLength({ min: 8 }).withMessage('كلمة المرور يجب أن تكون 8 أحرف على الأقل')
        .matches(/\d/).withMessage('كلمة المرور يجب أن تحتوي على رقم واحد على الأقل')
        .matches(/[A-Z]/).withMessage('كلمة المرور يجب أن تحتوي على حرف كبير واحد على الأقل')
        .trim(),
    body('username')
        .optional()
        .trim()
        .escape()
];

const checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMsg = errors.array().map(err => err.msg).join(' - ');
        return res.status(400).json({ message: errorMsg, errors: errors.array() });
    }
    next();
};

router.post('/register', validateAuth, checkValidation, registerUser);
router.post('/login', validateAuth, checkValidation, loginUser);
router.post('/logout', logoutUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.put('/wishlist', protect, updateWishlist);

module.exports = router;
