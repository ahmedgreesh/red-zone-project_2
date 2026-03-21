const bcrypt = require('bcryptjs');
const { sequelize } = require('./config/db');
const { User } = require('./models');

async function updateAdminPassword() {
    try {
        // Authenticate connection
        await sequelize.authenticate();
        console.log('✅ Connected to database');

        // Find admin user
        const admin = await User.findOne({ where: { email: 'admin@redzone.com' } });

        if (!admin) {
            console.log('❌ Admin user not found');
            process.exit(1);
        }

        // Update password
        const newPassword = 'redzoneaa3692053';
        admin.password = newPassword; // Will be hashed by beforeSave hook
        await admin.save();

        console.log('✅ Admin password updated successfully!');
        console.log(`   Email: admin@redzone.com`);
        console.log(`   New Password: ${newPassword}`);

        await sequelize.close();
        process.exit(0);

    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

updateAdminPassword();
