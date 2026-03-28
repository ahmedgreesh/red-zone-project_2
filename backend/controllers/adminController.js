const User = require('../models/User');
const Game = require('../models/Game');
const Order = require('../models/Order');
const { Op } = require('sequelize');
const { generateToken } = require('../utils/simpleToken');

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
        res.status(500).json({ message: error.message });
    }
};


// ─────────────────────────────────────────────────────────────────────────────
// STATIC ADMIN CREDENTIALS
// ─────────────────────────────────────────────────────────────────────────────
// These are used for local development.
// HOW TO UPGRADE:
//   1. Move credentials to DB (User table already has them).
//   2. Remove the STATIC_ADMIN block below.
//   3. Keep only the "Check Database" path.
// ─────────────────────────────────────────────────────────────────────────────
const STATIC_ADMIN = {
    email: 'admin@redzone.com',
    password: 'redzoneaa3692053'
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

        // ── 1. Static Admin Credentials (local dev) ──────────────────────────
        if (email.trim() === STATIC_ADMIN.email && password.trim() === STATIC_ADMIN.password) {
            const token = generateToken('admin-static', 'admin');
            return res.cookie('token', token, {
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: false, // Force false for local dev to avoid HTTPS requirements
                sameSite: 'Lax',
                path: '/' // Ensure cookie is available for all routes
            }).json({
                role: 'admin',
                email: STATIC_ADMIN.email,
                token: token
            });
        }

        // ── 2. Database Admin Check (for production / migrated accounts) ─────
        const user = await User.findOne({ where: { email: email.trim() } });
        if (user && user.role === 'admin') {
            const isMatch = await user.comparePassword(password.trim());
            if (isMatch) {
                const token = generateToken(user.id, 'admin');
                return res.cookie('token', token, {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                    httpOnly: true,
                    secure: false, // Force false for local dev
                    sameSite: 'Lax',
                    path: '/'
                }).json({ role: 'admin', email: user.email, token: token });
            }
        }

        return res.status(401).json({ message: 'البريد أو كلمة المرور غير صحيحة' });
    } catch (error) {
        console.error('[loginAdmin] Error:', error);
        res.status(500).json({ message: error.message });
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

// @desc    Get admin profile
// @route   GET /api/admin/profile
// @access  Private/Admin
const getAdminProfile = async (req, res) => {
    try {
        // Handle static admin case
        if (req.user.id === 'admin-static') {
            return res.json({
                id: 'admin-static',
                email: STATIC_ADMIN.email,
                role: 'admin'
            });
        }

        const user = await User.findByPk(req.user.id, {
            attributes: ['id', 'email', 'role']
        });

        if (!user) {
            return res.status(404).json({ message: 'Admin user not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update admin profile
// @route   PUT /api/admin/profile
// @access  Private/Admin
const updateAdminProfile = async (req, res) => {
    try {
        const { email, password } = req.body;

        // If it was the static admin, we need to find or create a DB record to persist changes
        let user;
        if (req.user.id === 'admin-static') {
            // Check if a DB user with this email already exists (maybe previously migrated)
            user = await User.findOne({ where: { role: 'admin' } });
            
            if (!user) {
                // Create the first real DB admin if it doesn't exist
                user = await User.create({
                    email: email || STATIC_ADMIN.email,
                    password: password || STATIC_ADMIN.password,
                    role: 'admin',
                    username: 'Admin'
                });
            }
        } else {
            user = await User.findByPk(req.user.id);
        }

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
        res.status(500).json({ message: error.message });
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
        res.status(500).json({ message: error.message });
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
