const User = require('./User');
const Game = require('./Game');
const Order = require('./Order');

// Define all relationships in one central place
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
    User,
    Game,
    Order
};
