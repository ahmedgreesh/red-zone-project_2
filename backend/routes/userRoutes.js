const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, getUserProfile, updateWishlist, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const { body, validationResult } = require('express-validator');

// Validation middleware
const validateAuth = [
    body('email').isEmail().withMessage('يجب إدخال بريد إلكتروني صحيح').normalizeEmail(),
    body('password').isLength({ min: 6 }).withMessage('كلمة المرور يجب أن تتكون من 6 أحرف على الأقل')
];

const checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array()[0].msg, errors: errors.array() });
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
