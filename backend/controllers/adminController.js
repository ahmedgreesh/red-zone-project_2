const User = require('../models/User');
const Game = require('../models/Game');
const Order = require('../models/Order');
const { Op } = require('sequelize');
const { generateToken } = require('../utils/simpleToken');
const logger = require('../utils/logger');

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

        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const startOfMonth = new Date();
        startOfMonth.setDate(1);
        startOfMonth.setHours(0, 0, 0, 0);

        const todaySales = await Order.sum('totalPrice', {
            where: {
                status: 'paid',
                createdAt: { [Op.gte]: startOfDay }
            }
        }) || 0;

        const monthSales = await Order.sum('totalPrice', {
            where: {
                status: 'paid',
                createdAt: { [Op.gte]: startOfMonth }
            }
        }) || 0;

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
            todaySales,
            monthSales,
            recentOrders
        });
    } catch (error) {
        logger.error('[getDashboardStats] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
    }
};

// @desc    Admin Login
// @route   POST /api/admin/login
// @access  Public
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Database Admin Check
        const user = await User.findOne({ where: { email: email.trim() } });
        if (user && user.role === 'admin') {
            const isMatch = await user.comparePassword(password.trim());
            if (isMatch) {
                const token = generateToken(user.id, 'admin');
                return res.cookie('token', token, {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'Lax',
                    path: '/'
                }).json({ role: 'admin', email: user.email, token: token });
            }
        }

        return res.status(401).json({ message: 'البريد أو كلمة المرور غير صحيحة' });
    } catch (error) {
        logger.error('[loginAdmin] Error: %O', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// @desc    Reset all sales data (DELETE orders)
// @route   DELETE /api/admin/sales/reset
// @access  Private/Admin
const resetSales = async (req, res) => {
    try {
        await Order.destroy({ where: {} });
        res.json({ message: 'تم تصفير جميع المبيعات بنجاح' });
    } catch (error) {
        logger.error('[resetSales] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
    }
};

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
const getAllUsers = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 1000;
        const offset = parseInt(req.query.offset) || 0;

        const users = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['createdAt', 'DESC']],
            limit,
            offset
        });
        res.json(users);
    } catch (error) {
        logger.error('[getAllUsers] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
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
        logger.error('[deleteUser] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
    }
};
// @desc    Update user role
// @route   PUT /api/admin/users/:id/role
// @access  Private/Admin
const updateUserRole = async (req, res) => {
    try {
        const { role } = req.body;
        
        if (!['user', 'admin'].includes(role)) {
            return res.status(400).json({ message: 'Invalid role provided' });
        }

        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.role = role;
        await user.save();
        res.json({ message: 'User role updated', user });
    } catch (error) {
        logger.error('[updateUserRole] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
    }
};

// @desc    Get all orders
// @route   GET /api/admin/orders
// @access  Private/Admin
const getAllOrders = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 1000;
        const offset = parseInt(req.query.offset) || 0;

        const orders = await Order.findAll({
            include: [{ model: User, attributes: ['email'] }],
            order: [['createdAt', 'DESC']],
            limit,
            offset
        });
        res.json(orders);
    } catch (error) {
        logger.error('[getAllOrders] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
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

        const { title, price, description, styles, tags, playStyle, playTime, difficulty, image, category, platform, rating, prices, discount, isAvailable } = req.body;
        
        if (title !== undefined) game.title = title;
        if (price !== undefined) game.price = price;
        if (description !== undefined) game.description = description;
        if (styles !== undefined) game.styles = styles;
        if (tags !== undefined) game.tags = tags;
        if (playStyle !== undefined) game.playStyle = playStyle;
        if (playTime !== undefined) game.playTime = playTime;
        if (difficulty !== undefined) game.difficulty = difficulty;
        if (image !== undefined) game.image = image;
        if (category !== undefined) game.category = category;
        if (platform !== undefined) game.platform = platform;
        if (rating !== undefined) game.rating = rating;
        if (prices !== undefined) game.prices = prices;
        if (discount !== undefined) game.discount = discount;
        if (isAvailable !== undefined) game.isAvailable = isAvailable;

        await game.save();
        res.json(game);
    } catch (error) {
        logger.error('[updateGame] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
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
        logger.error('[deleteGame] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
    }
};

// @desc    Get all games (for admin)
// @route   GET /api/admin/games
// @access  Private/Admin
const getAllGames = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 1000;
        const offset = parseInt(req.query.offset) || 0;

        const games = await Game.findAll({ 
            order: [['id', 'ASC']],
            limit,
            offset
        });
        res.json(games);
    } catch (error) {
        logger.error('[getAllGames] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
    }
};

// @desc    Get admin profile
// @route   GET /api/admin/profile
// @access  Private/Admin
const getAdminProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: ['id', 'email', 'role']
        });

        if (!user) {
            return res.status(404).json({ message: 'Admin user not found' });
        }

        res.json(user);
    } catch (error) {
        logger.error('[getAdminProfile] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
    }
};

// @desc    Update admin profile
// @route   PUT /api/admin/profile
// @access  Private/Admin
const updateAdminProfile = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findByPk(req.user.id);

        if (!user) {
            return res.status(404).json({ message: 'Admin user not found' });
        }

        if (email) user.email = email;
        if (password) user.password = password;

        await user.save();

        res.json({
            message: 'تم تحديث البيانات بنجاح',
            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        logger.error('[updateAdminProfile] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
    }
};

// @desc    Reset all users data
// @route   DELETE /api/admin/users/reset
// @access  Private/Admin
const resetUsers = async (req, res) => {
    try {
        // Delete all users except admins
        await User.destroy({ 
            where: { 
                role: { [Op.ne]: 'admin' } 
            } 
        });
        res.json({ message: 'تم تصفير جميع المستخدمين (باستثناء الإدارة) بنجاح' });
    } catch (error) {
        logger.error('[resetUsers] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
    }
};

module.exports = {
    loginAdmin,
    getDashboardStats,
    getAdminProfile,
    updateAdminProfile,
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
    resetUsers
};
