const Order = require('../models/Order');

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = async (req, res) => {
    const { orderItems, totalPrice } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400).json({ message: 'No order items' });
        return;
    } else {
        try {
            const order = await Order.create({
                userId: req.user.id,
                items: orderItems,
                totalPrice
            });
            res.status(201).json(order);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
module.exports = {
    addOrderItems
};
