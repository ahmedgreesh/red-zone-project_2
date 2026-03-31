const bcrypt = require('bcryptjs');
const { sequelize } = require('./config/db');
const { User } = require('./models');

async function updateAdminPassword() {
    try {
        // Authenticate connection
        await sequelize.authenticate();
        console.log('✅ Connected to database');

        // Find admin user
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@redzone.com';
        const admin = await User.findOne({ where: { email: adminEmail } });

        if (!admin) {
            console.log('❌ Admin user not found');
            process.exit(1);
        }

        // Update password
        const newPassword = process.env.ADMIN_PASSWORD;
        if (!newPassword) {
            console.log('❌ ADMIN_PASSWORD not set in .env');
            process.exit(1);
        }
        
        admin.password = newPassword; // Will be hashed by beforeSave hook
        await admin.save();

        console.log('✅ Admin password updated successfully!');
        console.log(`   Email: ${adminEmail}`);
        console.log(`   New Password: (Hidden for security)`);


        await sequelize.close();
        process.exit(0);

    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

updateAdminPassword();
