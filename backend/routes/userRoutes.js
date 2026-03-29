const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, getUserProfile, updateWishlist, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const { body, validationResult } = require('express-validator');

// Validation & Sanitization middleware (Registration)
const validateRegister = [
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

// Validation (Login) - Only basic format and presence
const validateLogin = [
    body('email')
        .isEmail().withMessage('يجب إدخال بريد إلكتروني صحيح')
        .normalizeEmail()
        .trim(),
    body('password')
        .notEmpty().withMessage('كلمة المرور مطلوبة')
        .trim()
];

const checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMsg = errors.array().map(err => err.msg).join(' - ');
        return res.status(400).json({ message: errorMsg, errors: errors.array() });
    }
    next();
};

router.post('/register', validateRegister, checkValidation, registerUser);
router.post('/login', validateLogin, checkValidation, loginUser);
router.post('/logout', logoutUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.put('/wishlist', protect, updateWishlist);

module.exports = router;
