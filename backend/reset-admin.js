const bcrypt = require('bcryptjs');
const { sequelize } = require('./config/db');
const { User } = require('./models');

async function forceResetAdmin() {
    try {
        await sequelize.authenticate();
        console.log('✅ Connected to database');

        const adminEmail = 'admin@redzone.com';
        const newPassword = 'redzoneaa3692053';

        let admin = await User.findOne({ where: { email: adminEmail } });

        if (!admin) {
            console.log('Admin not found, creating new admin account...');
            admin = await User.create({
                email: adminEmail,
                password: newPassword,
                role: 'admin',
                username: 'Admin'
            });
        } else {
            console.log('Admin found, resetting password...');
            admin.password = newPassword;
            await admin.save();
        }

        console.log('--------------------------------------------------');
        console.log('SUCCESS: Admin account ready!');
        console.log(`Email: ${adminEmail}`);
        console.log(`Password: ${newPassword}`);
        console.log('--------------------------------------------------');

        await sequelize.close();
        process.exit(0);

    } catch (error) {
        console.error('❌ Error during reset:', error);
        process.exit(1);
    }
}

forceResetAdmin();
