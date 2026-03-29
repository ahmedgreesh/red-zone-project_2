const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');
const {
    loginAdmin,
    getDashboardStats,
    getAllUsers,
    deleteUser,
    updateUserRole,
    getAllOrders,
    updateOrderStatus,
    createGame,
    updateGame,
    deleteGame,
    getAllGames,
    resetSales,
    resetUsers,
    getAdminProfile,
    updateAdminProfile
} = require('../controllers/adminController');

const { body, validationResult } = require('express-validator');

// Validation middleware
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array().map(e => e.msg).join(' - '), errors: errors.array() });
    }
    next();
};

// ─── Public Routes ────────────────────────────────────────────────────────────

// Admin login — returns a token if credentials are valid
router.post('/login', [
    body('email').isEmail().withMessage('يجب إدخال بريد إلكتروني صحيح').normalizeEmail().trim(),
    body('password').notEmpty().withMessage('كلمة المرور مطلوبة').trim()
], validate, loginAdmin);

// ─── Protected Routes (require valid token + admin role) ──────────────────────

router.use(protect);
router.use(adminOnly);

// Dashboard stats
router.get('/dashboard', (req, res) => {
    res.json({ ok: true, user: { id: req.user.id, email: req.user.email, role: req.user.role } });
});

router.get('/stats', getDashboardStats);
router.delete('/sales/reset', resetSales);

// Users management
router.delete('/users/reset', resetUsers);
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);
router.put('/users/:id/role', [
    body('role').isIn(['user', 'admin']).withMessage('صلاحية غير صالحة')
], validate, updateUserRole);

// Orders management
router.get('/orders', getAllOrders);
router.put('/orders/:id', [
    body('status').notEmpty().withMessage('الحالة مطلوبة').trim().escape()
], validate, updateOrderStatus);

// Games management
const gameValidation = [
    body('title').notEmpty().withMessage('العنوان مطلوب').trim().escape(),
    body('prices').isArray({ min: 1 }).withMessage('يجب إضافة سعر واحد على الأقل'),
    body('category').notEmpty().withMessage('التصنيف مطلوب').trim().escape(),
    body('platform').notEmpty().withMessage('المنصة مطلوبة').trim().escape(),
    body('discount').optional().isInt({ min: 0, max: 100 }).withMessage('الخصم يجب أن يكون بين 0 و 100')
];

router.get('/games', getAllGames);
router.post('/games', gameValidation, validate, createGame);
router.put('/games/:id', gameValidation, validate, updateGame);
router.delete('/games/:id', deleteGame);

// Profile management
router.get('/profile', getAdminProfile);
router.put('/profile', [
    body('username').optional().trim().escape(),
    body('email').optional().isEmail().withMessage('بريد غير صالح').normalizeEmail().trim()
], validate, updateAdminProfile);

module.exports = router;
