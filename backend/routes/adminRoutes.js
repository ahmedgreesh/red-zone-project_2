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

// ─── Public Routes ────────────────────────────────────────────────────────────

// Admin login — returns a token if credentials are valid
router.post('/login', loginAdmin);

// ─── Protected Routes (require valid token + admin role) ──────────────────────

router.use(protect);
router.use(adminOnly);

/**
 * GET /api/admin/dashboard
 *
 * This is the GATE that the frontend uses on page load to verify
 * the user is a real admin (not just someone who edited localStorage).
 * Returns 401 if no/bad token, 403 if token is valid but not admin.
 */
router.get('/dashboard', (req, res) => {
    res.json({
        ok: true,
        message: 'Welcome to the Red Zone Admin Dashboard',
        user: {
            id: req.user.id,
            email: req.user.email,
            role: req.user.role
        }
    });
});

// Dashboard stats
router.get('/stats', getDashboardStats);
router.delete('/sales/reset', resetSales);

// Users management
router.delete('/users/reset', resetUsers);
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);
router.put('/users/:id/role', updateUserRole);

// Orders management
router.get('/orders', getAllOrders);
router.put('/orders/:id', updateOrderStatus);

// Games management
router.get('/games', getAllGames);
router.post('/games', createGame);
router.put('/games/:id', updateGame);
router.delete('/games/:id', deleteGame);

// Profile management
router.get('/profile', getAdminProfile);
router.put('/profile', updateAdminProfile);

module.exports = router;

