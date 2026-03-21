const User = require('../models/User');
const Game = require('../models/Game');
const Order = require('../models/Order');

// @desc    Get dashboard statistics
// @route   GET /api/admin/stats
// @access  Private/Admin
const getDashboardStats = async (req, res) => {
    try {
        const totalUsers = await User.count();
        const totalGames = await Game.count();
        const totalOrders = await Order.count();

        // Get orders by status
        const pendingOrders = await Order.count({ where: { status: 'pending' } });
        const paidOrders = await Order.count({ where: { status: 'paid' } });
        const canceledOrders = await Order.count({ where: { status: 'canceled' } });

        // Calculate total revenue from paid orders
        const totalRevenue = await Order.sum('totalPrice', { where: { status: 'paid' } }) || 0;

        // Recent orders
        const recentOrders = await Order.findAll({
            limit: 5,
            order: [['createdAt', 'DESC']],
            include: [{ model: User, attributes: ['email'] }]
        });

        res.json({
            totalUsers,
            totalGames,
            totalOrders,
            pendingOrders,
            paidOrders,
            canceledOrders,
            totalRevenue,
            recentOrders
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['createdAt', 'DESC']]
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete user
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.destroy();
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update user role
// @route   PUT /api/admin/users/:id/role
// @access  Private/Admin
const updateUserRole = async (req, res) => {
    try {
        const { role } = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.role = role;
        await user.save();
        res.json({ message: 'User role updated', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all orders
// @route   GET /api/admin/orders
// @access  Private/Admin
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({
            include: [{ model: User, attributes: ['email'] }],
            order: [['createdAt', 'DESC']]
        });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update order status
// @route   PUT /api/admin/orders/:id
// @access  Private/Admin
const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findByPk(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        order.status = status;
        await order.save();
        res.json({ message: 'Order status updated', order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new game
// @route   POST /api/admin/games
// @access  Private/Admin
const createGame = async (req, res) => {
    try {
        // Get the highest ID and increment
        const lastGame = await Game.findOne({ order: [['id', 'DESC']] });
        const newId = lastGame ? lastGame.id + 1 : 1;

        const game = await Game.create({
            ...req.body,
            id: newId
        });
        res.status(201).json(game);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update a game
// @route   PUT /api/admin/games/:id
// @access  Private/Admin
const updateGame = async (req, res) => {
    try {
        const game = await Game.findOne({ where: { id: parseInt(req.params.id) } });
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }

        Object.assign(game, req.body);
        await game.save();
        res.json(game);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a game
// @route   DELETE /api/admin/games/:id
// @access  Private/Admin
const deleteGame = async (req, res) => {
    try {
        const game = await Game.findOne({ where: { id: parseInt(req.params.id) } });
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }
        await game.destroy();
        res.json({ message: 'Game deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all games (for admin)
// @route   GET /api/admin/games
// @access  Private/Admin
const getAllGames = async (req, res) => {
    try {
        const games = await Game.findAll({ order: [['id', 'ASC']] });
        res.json(games);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
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
};
