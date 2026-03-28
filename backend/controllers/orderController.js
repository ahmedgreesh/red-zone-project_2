const Order = require('../models/Order');
const logger = require('../utils/logger');

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = async (req, res) => {
    const { orderItems, totalPrice, status } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400).json({ message: 'No order items' });
        return;
    } else {
        try {
            const order = await Order.create({
                userId: req.user.id,
                items: orderItems,
                totalPrice,
                status: status || 'pending'
            });
            res.status(201).json(order);
        } catch (error) {
            logger.error('[addOrderItems] Error: %O', error);
            res.status(400).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
        }
    }
};

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
module.exports = {
    addOrderItems
};
