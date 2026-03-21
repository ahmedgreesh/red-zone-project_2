const { sequelize } = require('./config/db');
const User = require('./models/User');

const seedUser = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected.');

        // Add a test user
        const [user, created] = await User.findOrCreate({
            where: { email: 'test@redzone.com' },
            defaults: {
                email: 'test@redzone.com',
                password: 'password123',
                username: 'Test User',
                role: 'user'
            }
        });

        if (created) {
            console.log('Test user created: test@redzone.com / password123');
        } else {
            console.log('Test user already exists. You can login with: test@redzone.com / password123');
            
            // For safety, let's update the password so we know exactly what it is
            user.password = 'password123';
            await user.save();
            console.log('Password reset to: password123');
        }

        console.log('User seeding finished!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding user:', error);
        process.exit(1);
    }
};

seedUser();
