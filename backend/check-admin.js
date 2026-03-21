const { sequelize } = require('./config/db');
const { User, Order } = require('./models');

async function checkAdmin() {
    try {
        await sequelize.authenticate();
        console.log('✅ Connected to database');

        const admin = await User.findOne({ where: { email: 'admin@redzone.com' } });
        if (admin) {
            console.log(`✅ Admin found: ${admin.email}`);
            const orders = await Order.findAll({ where: { userId: admin.id } });
            console.log(`📦 Orders for Admin: ${orders.length}`);
            if (orders.length > 0) {
                console.log('⚠️ WARNING: Admin has orders. Deleting admin will fail due to Foreign Key constraint.');
            }
        } else {
            console.log('❌ Admin NOT found.');
        }

        await sequelize.close();
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

checkAdmin();
