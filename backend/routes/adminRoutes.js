const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const {
    getDashboardStats,
    getAllUsers,
    deleteUser,
    updateUserRole,
    getAllOrders,
    updateOrderStatus,
    createGame,
    updateGame,
    deleteGame,
    getAllGames
} = require('../controllers/adminController');

// All routes are protected and require admin role
router.use(protect);
router.use(admin);

// Dashboard
router.get('/stats', getDashboardStats);

// Users management
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

module.exports = router;
