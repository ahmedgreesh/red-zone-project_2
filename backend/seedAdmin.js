const { sequelize } = require('./config/db');
const User = require('./models/User');

const seedAdmin = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected.');

        // Get the specific admin user by email
        const adminEmail = 'admin@redzone.com';
        const adminPassword = 'aa3692053';

        const [user, created] = await User.findOrCreate({
            where: { email: adminEmail },
            defaults: {
                email: adminEmail,
                password: adminPassword,
                username: 'Red Zone Admin',
                role: 'admin'
            }
        });

        if (created) {
            console.log(`Admin user created: ${adminEmail} / ${adminPassword}`);
        } else {
            console.log(`Admin user already exists. Overwriting password...`);
            
            // Force reset the password to what we want
            user.password = adminPassword;
            user.role = 'admin'; // Ensure they have the admin role
            await user.save();
            
            console.log(`Password reset to: ${adminPassword}`);
        }

        console.log('Admin seeding finished! You can now login to the admin panel with these credentials.');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding admin:', error);
        process.exit(1);
    }
};

seedAdmin();
