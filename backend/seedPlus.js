const { sequelize } = require('./config/db');
const Game = require('./models/Game');

const subscriptionData = [
    {
        id: 101,
        title: "PlayStation Plus Essential",
        image: "assets/images/red_essential_logo.jpg",
        category: "Subscription",
        platform: "PS5/PS4",
        desc: "Essential features for your PlayStation experience.",
        prices: [
            { label: "1 Month - Full Account", value: 500 },
            { label: "3 Months - Full Account", value: 1146 },
            { label: "3 Months - Prim PS5", value: 889 },
            { label: "3 Months - Prim PS4", value: 419 },
            { label: "3 Months - Secondary", value: 99 },
            { label: "1 Year - Full Account", value: 2999 },
            { label: "1 Year - Prim PS5", value: 2299 },
            { label: "1 Year - Prim PS4", value: 899 },
            { label: "1 Year - Secondary", value: 249 }
        ],
        stock: 999
    },
    {
        id: 102,
        title: "PlayStation Plus Extra",
        image: "assets/images/red_extra_logo.jpg",
        category: "Subscription",
        platform: "PS5/PS4",
        desc: "Hundreds of games at your fingertips.",
        prices: [
            { label: "1 Month - Full Account", value: 669 },
            { label: "3 Months - Full Account", value: 1849 },
            { label: "3 Months - Prim PS5", value: 1299 },
            { label: "3 Months - Prim PS4", value: 599 },
            { label: "3 Months - Secondary", value: 249 },
            { label: "1 Year - Full Account", value: 4999 },
            { label: "1 Year - Prim PS5", value: 3349 },
            { label: "1 Year - Prim PS4", value: 1249 },
            { label: "1 Year - Secondary", value: 899 }
        ],
        stock: 999
    },
    {
        id: 103,
        title: "PlayStation Plus Premium",
        image: "assets/images/red_premium_logo.jpg",
        category: "Subscription",
        platform: "PS5/PS4",
        desc: "The ultimate PlayStation experience with classics and trials.",
        prices: [
            { label: "1 Month - Full Account", value: 799 },
            { label: "3 Months - Full Account", value: 2199 },
            { label: "1 Year - Full Account", value: 5899 }
        ],
        stock: 999
    }
];

const seedSubscriptions = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected.');

        for (const item of subscriptionData) {
            const [game, created] = await Game.findOrCreate({
                where: { id: item.id },
                defaults: item
            });

            if (!created) {
                await game.update(item);
                console.log(`Updated: ${item.title}`);
            } else {
                console.log(`Created: ${item.title}`);
            }
        }

        console.log('Subscriptions seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding subscriptions:', error);
        process.exit(1);
    }
};

seedSubscriptions();
