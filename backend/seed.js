const bcrypt = require('bcryptjs');
const { sequelize } = require('./config/db');
const { User, Game, Order } = require('./models');

const games = [
    {
        id: 1,
        title: "Black Myth: Wukong",
        image: "assets/images/wukong.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story"],
        desc: "Embark on an epic journey as the Destined One. Confront your destiny in this Action RPG rooted in Chinese mythology.",
        prices: [
            { label: "Primary", value: 1325 },
            { label: "Secondary", value: 899 },
            { label: "Full Account", value: 2099 }
        ],
        tags: ["Action", "Story"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 2,
        title: "Call of Duty: Black Ops 6",
        image: "assets/images/bo6.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 4,
        styles: ["Online", "Co-op", "Story"],
        desc: "Forced to go rogue. Hunted from within. This is Call of Duty: Black Ops 6.",
        prices: [
            { label: "Primary PS5", value: 799 },
            { label: "Secondary", value: 549  },
            { label: "Primary PS4", value: 449  }
        ],
        tags: ["Action", "Competitive", "Story"],
        playStyle: ["Solo", "Online", "Co-op"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 3,
        title: "God of War Ragnarok",
        image: "assets/images/gow_ragnarok.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story"],
        desc: "Fimbulwinter is here. Kratos and Atreus must journey to each of the Nine Realms.",
        prices: [
            { label: "Primary PS5", value: 699 },
            { label: "Secondary", value: 449 },
            { label: "Primary PS4", value: 449 }
        ],
        tags: ["Action", "Story"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 4,
        title: "Red Dead Redemption 2",
        image: "assets/images/rdr2.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story"],
        desc: "America, 1899. The end of the wild west era has begun.",
        prices: [
            { label: "Primary PS5", value: 425 },
            { label: "Secondary", value: 275 },
            { label: "Primary PS4", value: 279 }
        ],
        tags: ["Story", "Open World"],
        playStyle: ["Solo", "Online"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 5,
        title: "ARC Raiders",
        image: "assets/images/arc_raiders.jpg",
        category: "Action",
        platform: "PS5",
        rating: 4,
        styles: ["Online", "Co-op"],
        desc: "A free-to-play, third-person, PvPvE extraction shooter.",
        prices: [
            { label: "Primary PS5", value: 1299 },
            { label: "Secondary PS5", value: 699 }
        ],
        tags: ["Action", "Competitive"],
        playStyle: ["Online", "Co-op"],
        playTime: "1-3",
        difficulty: "Hard"
    },
    {
        id: 6,
        title: "Astro Bot",
        image: "assets/images/astro_bot.png",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Chill"],
        desc: "A super-sized adventure! Explore 50 planets and find lost bots.",
        prices: [
            { label: "Primary", value: 1499 },
            { label: "Secondary", value: 999 }
        ],
        tags: ["Action", "Story"],
        playStyle: ["Solo"],
        playTime: "1-3",
        difficulty: "Easy"
    },
    {
        id: 7,
        title: "Silent Hill 2",
        image: "assets/images/silent_hill2.png",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Horror"],
        desc: "Experience the psychological horror masterpiece, rebuilt for PS5.",
        prices: [
            { label: "Primary PS5", value: 999 },
            { label: "Secondary PS5", value: 599 }
        ],
        tags: ["Story"],
        playStyle: ["Solo"],
        playTime: "1-3",
        difficulty: "Normal"
    },
    {
        id: 8,
        title: "Final Fantasy VII Rebirth",
        image: "assets/images/final_fantasy.png",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story"],
        desc: "The Unknown Journey Continues.",
        prices: [
            { label: "Primary PS5", value: 2000 },
            { label: "Secondary", value: 1500 }
        ],
        tags: ["Story", "Open World"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 9,
        title: "Ghost of Tsushima",
        image: "assets/images/ghost_of_tsushima.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Adventure"],
        desc: "Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet.",
        prices: [
            { label: "Primary PS5", value: 599 },
            { label: "Primary PS4", value: 449 },
            { label: "Secondary", value: 400 }
        ],
        tags: ["Action", "Story", "Open World"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 10,
        title: "Spider-Man 2",
        image: "assets/images/spiderman2.png",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story"],
        desc: "Experience the epic power of the Symbiote.",
        prices: [
            { label: "Primary PS5", value: 1199 },
            { label: "Secondary", value: 799 }
        ],
        tags: ["Action", "Open World", "Story"],
        playStyle: ["Solo"],
        playTime: "1-3",
        difficulty: "Normal"
    },
    {
        id: 11,
        title: "FC 26",
        image: "assets/images/fc26.png",
        category: "Sports",
        platform: "PS5/PS4",
        rating: 4,
        styles: ["Online", "Co-op"],
        desc: "The next evolution of the World's Game.",
        prices: [
            { label: "Primary PS5", value: 899 },
            { label: "Primary PS4", value: 419 },
            { label: "Secondary", value: 349 }
        ],
        tags: ["Competitive"],
        playStyle: ["Solo", "Online", "Co-op"],
        playTime: "Less than 1",
        difficulty: "Normal"
    },
    {
        id: 12,
        title: "NBA 2K25",
        image: "assets/images/nba2k25.jpg",
        category: "Sports",
        platform: "PS5/PS4",
        rating: 4,
        styles: ["Online", "Co-op"],
        desc: "Ball over everything.",
        prices: [
            { label: "Primary PS5", value: 699 },
            { label: "Primary PS4", value: 399 },
            { label: "Secondary", value: 499 }
        ],
        tags: ["Competitive"],
        playStyle: ["Solo", "Online", "Co-op"],
        playTime: "Less than 1",
        difficulty: "Normal"
    },
    {
        id: 13,
        title: "WWE 2K25",
        image: "assets/images/wwe2k25.png",
        category: "Sports",
        platform: "PS5",
        rating: 4,
        styles: ["Online", "Co-op"],
        desc: "Finish Your Story.",
        prices: [
            { label: "Primary PS5", value: 849 },
            { label: "Primary PS4", value: 549 },
            { label: "Secondary", value: 549 }
        ],
        tags: ["Competitive"],
        playStyle: ["Solo", "Online", "Co-op"],
        playTime: "Less than 1",
        difficulty: "Normal"
    },
    {
        id: 14,
        title: "UFC 5",
        image: "assets/images/ufc5.png",
        category: "Sports",
        platform: "PS5",
        rating: 4,
        styles: ["Online"],
        desc: "As real as it gets.",
        prices: [
            { label: "Primary PS5", value: 599 },
            { label: "Secondary PS5", value: 379 }
        ],
        tags: ["Competitive"],
        playStyle: ["Solo", "Online"],
        playTime: "Less than 1",
        difficulty: "Normal"
    },
    {
        id: 15,
        title: "Battlefield 6",
        image: "assets/images/battlefield_6.png",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Online", "Co-op", "Story"],
        desc: "The next generation of all-out warfare.",
        prices: [
            { label: "Primary PS5", value: 1399 },
            { label: "Secondary", value: 799 },
            { label: "Full Account", value: 2149 }
        ],
        tags: ["Action", "Competitive"],
        playStyle: ["Solo", "Online", "Co-op"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 16,
        title: "F1 25",
        image: "assets/images/f125.png",
        category: "Sports",
        platform: "PS5",
        rating: 4,
        desc: "Drive the latest 2025 cars.",
        prices: [
            { label: "Primary PS5", value: 849 },
            { label: "Secondary PS5", value: 549 }
        ],
        tags: ["Competitive"],
        playStyle: ["Solo", "Online", "Co-op"],
        playTime: "Less than 1",
        difficulty: "Hard"
    },
    {
        id: 17,
        title: "Gran Turismo 7",
        image: "assets/images/gran_turismo_7.png",
        category: "Sports",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Simulation", "Online"],
        desc: "The Real Driving Simulator.",
        prices: [
            { label: "Primary PS5", value: 899 },
            { label: "Secondary PS5", value: 649 },
            { label: "Primary PS4", value: 599 },
            { label: "Secondary PS4", value: 450 }
        ],
        tags: ["Competitive"],
        playStyle: ["Solo", "Online"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 18,
        title: "Assassin's Creed Mirage",
        image: "assets/images/ac_mirage.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Adventure"],
        desc: "Experience the story of Basim.",
        prices: [
            { label: "Primary PS5", value: 599 },
            { label: "Primary PS4", value: 399 },
            { label: "Secondary", value: 379 }
        ],
        tags: ["Action", "Story"],
        playStyle: ["Solo"],
        playTime: "1-3",
        difficulty: "Normal"
    },
    {
        id: 19,
        title: "Elden Ring",
        image: "assets/images/elden_ring.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Adventure"],
        desc: "Rise, Tarnished.",
        prices: [
            { label: "Primary PS5", value: 990 },
            { label: "Primary PS4", value: 800 },
            { label: "Secondary", value: 690 }
        ],
        tags: ["Action", "Story", "Open World"],
        playStyle: ["Solo", "Online"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 20,
        title: "Elden Ring: Shadow of the Erdtree",
        image: "assets/images/elden_ring_dlc.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Adventure"],
        desc: "Includes the base game and DLC.",
        prices: [
            { label: "Primary PS5 with DLC", value: 1499 },
            { label: "Primary PS4 with DLC", value: 1100 },
            { label: "Secondary with DLC", value: 1000 }
        ],
        tags: ["Action", "Story", "Open World"],
        playStyle: ["Solo", "Online"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 21,
        title: "Call of Duty: Black Ops 7",
        image: "assets/images/cod_bo7.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Online", "Co-op", "Story"],
        desc: "Cross the lines.",
        prices: [
            { label: "Primary PS5", value: 1299 },
            { label: "Primary PS4", value: 429 },
            { label: "Secondary", value: 799 }
        ],
        tags: ["Action", "Competitive", "FPS"],
        playStyle: ["Solo", "Online", "Co-op"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 22,
        title: "WWE 2K24",
        image: "assets/images/wwe2k24.png",
        category: "Sports",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Sports", "Competitive"],
        desc: "Finish Your Story.",
        prices: [
            { label: "Primary PS5", value: 599 },
            { label: "Primary PS4", value: 499 },
            { label: "Secondary", value: 399 }
        ],
        tags: ["Sports", "Competitive"],
        playStyle: ["Solo", "Online", "Co-op"],
        playTime: "Less than 1",
        difficulty: "Normal"
    },
    {
        id: 23,
        title: "Hogwarts Legacy",
        image: "assets/images/hogwarts_legacy.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Adventure"],
        desc: "Experience Hogwarts in the 1800s.",
        prices: [
            { label: "Primary PS5", value: 649 },
            { label: "Primary PS4", value: 450 },
            { label: "Secondary", value: 389 }
        ],
        tags: ["Action", "Story", "Open World"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 24,
        title: "Call of Duty: Modern Warfare 3",
        image: "assets/images/mw3.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Online", "Co-op", "Story"],
        desc: "In the direct sequel to the record-breaking Call of Duty: Modern Warfare II, Captain Price and Task Force 141 face off against the ultimate threat.",
        prices: [
            { label: "Primary PS5", value: 875 },
            { label: "Primary PS4", value: 600 },
            { label: "Secondary", value: 600 }
        ],
        tags: ["Action", "Competitive", "FPS"],
        playStyle: ["Solo", "Online", "Co-op"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 25,
        title: "The Crew Motorfest",
        image: "assets/images/crew_motorfest.jpg.jpg",
        category: "Sports",
        platform: "PS5/PS4",
        rating: 4,
        styles: ["Online", "Co-op", "Racing"],
        desc: "Welcome to Motorfest! Join the one-of-a-kind festival and enjoy the best experiences car culture has to offer in a beautiful Hawaiian open world.",
        prices: [
            { label: "Primary PS5", value: 599 },
            { label: "Primary PS4", value: 399 },
            { label: "Secondary", value: 349 }
        ],
        tags: ["Sports", "Competitive", "Racing"],
        playStyle: ["Solo", "Online", "Co-op"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 26,
        title: "Crash Bandicoot™ Bundle (3 Games)",
        image: "assets/images/crash_bundle.png.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Competitive", "Co-op"],
        desc: "The ultimate Crash Bandicoot collection! Includes three complete adventures: \n• Crash Bandicoot™ N. Sane Trilogy \n• Crash Team Racing Nitro-Fueled \n• Crash Bandicoot™ 4: It’s About Time",
        prices: [
            { label: "Primary PS5", value: 599 },
            { label: "Primary PS4", value: 399 },
            { label: "Secondary", value: 449 }
        ],
        tags: ["Action", "Classic", "Bundle"],
        playStyle: ["Solo", "Online", "Co-op"],
        playTime: "100+",
        difficulty: "Hard"
    },
    {
        id: 27,
        title: "Forza Horizon 5",
        image: "assets/images/forza5.png.png",
        category: "Sports",
        platform: "PS5",
        rating: 5,
        styles: ["Online", "Racing", "Open World"],
        desc: "Your ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.",
        prices: [
            { label: "Primary PS5", value: 1099 },
            { label: "Secondary PS5", value: 749 },
            { label: "Full Account", value: 2900 }
        ],
        tags: ["Sports", "Racing", "Open World"],
        playStyle: ["Solo", "Online"],
        playTime: "50+",
        difficulty: "Normal"
    },
    {
        id: 28,
        title: "Ghost of Yōtei",
        image: "assets/images/ghost_of_yotei.png.png",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Adventure"],
        desc: "A new Ghost story awaits. In 1603, Atsu sets out on a journey in the lands surrounding Mount Yōtei.",
        prices: [
            { label: "Primary PS5", value: 1949 },
            { label: "Secondary PS5", value: 1449 },
            { label: "Full Account", value: 3299 }
        ],
        tags: ["Action", "Story", "Open World"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 29,
        title: "Resident Evil 4",
        image: "assets/images/resident_evil_4.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Horror"],
        desc: "Experience the survival horror masterpiece, rebuilt for PS5 and PS4. <b>(يدعم اللغة العربية)</b>",
        prices: [
            { label: "Primary PS5", value: 499 },
            { label: "Secondary PS5", value: 399 },
            { label: "Primary PS4", value: 349 },
            { label: "Secondary PS4", value: 299 }
        ],
        tags: ["Action", "Story", "Horror", "Arabic"],
        playStyle: ["Solo"],
        playTime: "1-3",
        difficulty: "Normal"
    },
    {
        id: 30,
        title: "Hitman 3 Parts",
        image: "assets/images/hitman_3.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Stealth"],
        desc: "Enter the world of the ultimate assassin. Become Agent 47 in the dramatic conclusion to the World of Assassination trilogy.",
        prices: [
            { label: "Primary PS5", value: 649 },
            { label: "Primary PS4", value: 449 },
            { label: "Secondary", value: 399 }
        ],
        tags: ["Action", "Story", "Stealth"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 31,
        title: "It Takes Two",
        image: "assets/images/it_takes_two.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Co-op", "Story"],
        desc: "Embark on the craziest journey of your life in It Takes Two. Invite a friend to join for free.",
        prices: [
            { label: "Primary PS5", value: 349 },
            { label: "Primary PS4", value: 149 },
            { label: "Secondary", value: 199 }
        ],
        tags: ["Action", "Story", "Co-op"],
        playStyle: ["Co-op", "Online"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 32,
        title: "Assassin's Creed Shadows",
        image: "assets/images/ac_shadows.png",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Adventure", "Stealth"],
        desc: "Live the intertwined stories of Naoe, an adept shinobi Assassin, and Yasuke, the powerful African samurai.",
        prices: [
            { label: "Primary PS5", value: 899 },
            { label: "Secondary PS5", value: 649 }
        ],
        tags: ["Action", "Story", "Open World"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 33,
        title: "Last Of Us 1 Remake",
        image: "assets/images/tlou_remake.png",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Adventure"],
        desc: "Experience the emotional storytelling and unforgettable characters in The Last of Us, rebuilt for PS5.",
        prices: [
            { label: "Primary PS5", value: 999 },
            { label: "Secondary PS5", value: 599 }
        ],
        tags: ["Action", "Story", "Adventure"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 34,
        title: "Mortal Kombat 1",
        image: "assets/images/mk1.png",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Competitive"],
        desc: "It's In Our Blood. Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang.",
        prices: [
            { label: "Primary PS5", value: 589 },
            { label: "Secondary PS5", value: 369 }
        ],
        tags: ["Action", "Competitive", "Fighting"],
        playStyle: ["Solo", "Online", "Co-op"],
        playTime: "1-3",
        difficulty: "Normal"
    },
    {
        id: 35,
        title: "Cyberpunk 2077",
        image: "assets/images/cyberpunk_2077.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Open World"],
        desc: "An open-world, action-adventure RPG set in the megalopolis of Night City.",
        prices: [
            { label: "Primary PS5", value: 699 },
            { label: "Primary PS4", value: 429 },
            { label: "Secondary", value: 399 }
        ],
        tags: ["Action", "Open World", "Story", "RPG"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 36,
        title: "Alan Wake 2",
        image: "assets/images/alan_wake_2.png",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Horror"],
        desc: "A string of ritualistic murders threatens Bright Falls. Saga Anderson and Alan Wake must face the darkness.",
        prices: [
            { label: "Primary PS5", value: 999 },
            { label: "Secondary PS5", value: 549 }
        ],
        tags: ["Action", "Story", "Horror", "Mystery"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 37,
        title: "Detroit: Become Human",
        image: "assets/images/detroit.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Adventure"],
        desc: "Detroit 2038. Technology has evolved to a point where human like androids are everywhere.",
        prices: [
            { label: "Primary PS5", value: 380 },
            { label: "Primary PS4", value: 380 },
            { label: "Secondary", value: 280 }
        ],
        tags: ["Action", "Story", "Adventure", "Sci-Fi"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 38,
        title: "Last of Us Part II",
        image: "assets/images/tlou2.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Adventure"],
        desc: "Five years after their dangerous journey, Ellie and Joel have settled down in Jackson, Wyoming.",
        prices: [
            { label: "Primary PS5", value: 649 },
            { label: "Primary PS4", value: 549 },
            { label: "Secondary", value: 449 }
        ],
        tags: ["Action", "Story", "Adventure", "Gore"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 39,
        title: "Split Fiction",
        image: "assets/images/split_fiction.png",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Adventure"],
        desc: "A gripping tale of choice and consequence where every decision splits the reality.",
        prices: [
            { label: "Primary PS5", value: 1049 },
            { label: "Secondary", value: 679 },
            { label: "Full Account", value: 2049 }
        ],
        tags: ["Action", "Story", "Indie"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 40,
        title: "Spider-Man: Miles Morales",
        image: "assets/images/miles_morales.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Action", "Adventure"],
        desc: "Experience the rise of Miles Morales as the new hero masters his powers. <b>(يدعم اللغتين العربية والإنجليزية)</b>",
        prices: [
            { label: "Primary PS5", value: 500 },
            { label: "Primary PS4", value: 500 },
            { label: "Secondary", value: 400 }
        ],
        tags: ["Action", "Adventure", "Superhero", "Arabic"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 41,
        title: "Need for Speed Heat",
        image: "assets/images/nfs_heat.png",
        category: "Sports",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Racing", "Open World"],
        desc: "Hustle by day and risk it all by night in Need for Speed Heat.",
        prices: [
            { label: "Primary PS5", value: 200 },
            { label: "Primary PS4", value: 200 },
            { label: "Secondary", value: 100 }
        ],
        tags: ["Racing", "Open World", "Action"],
        playStyle: ["Solo", "Online"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 42,
        title: "Sekiro: Shadows Die Twice",
        image: "assets/images/sekiro.png",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Action", "Hard"],
        desc: "Take Revenge. Restore Your Honor. Kill Ingeniously.",
        prices: [
            { label: "Primary PS5", value: 449 },
            { label: "Primary PS4", value: 449 },
            { label: "Secondary", value: 349 }
        ],
        tags: ["Action", "Hard", "Souls-like"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 43,
        title: "Mafia: The Old Country",
        image: "assets/images/mafia_old_country.png",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Action"],
        desc: "Uncover the origins of organized crime in 1900s Sicily.",
        prices: [
            { label: "Primary PS5", value: 1349 },
            { label: "Secondary PS5", value: 899 }
        ],
        tags: ["Action", "Story", "Crime"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 44,
        title: "Marathon",
        image: "assets/images/marathon.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Online", "Action"],
        desc: "A sci-fi extraction shooter where players compete as cybernetic mercenaries known as Runners.",
        prices: [
            { label: "Primary PS5", value: 1199 },
            { label: "Secondary", value: 799 }
        ],
        tags: ["Action", "Sci-Fi", "Online"],
        playStyle: ["Online", "Co-op"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 45,
        title: "Cronos: The New Dawn",
        image: "assets/images/cronos.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Horror"],
        desc: "Experience a twisted time-travel horror story set in a grim-future Poland.",
        prices: [
            { label: "Primary PS5", value: 1199 },
            { label: "Secondary", value: 699 }
        ],
        tags: ["Action", "Story", "Horror"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 46,
        title: "Dispatch",
        image: "assets/images/dispatch.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Action"],
        desc: "A high-stakes narrative action-adventure where every choice matters.",
        prices: [
            { label: "Primary PS5", value: 849 },
            { label: "Secondary", value: 549 }
        ],
        tags: ["Action", "Story", "Indie"],
        playStyle: ["Solo"],
        playTime: "1-3",
        difficulty: "Normal"
    },
    {
        id: 47,
        title: "Crimson Desert",
        image: "assets/images/crimson_desert.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Open World"],
        desc: "A stunning open-world action RPG following mercenaries fighting for survival.",
        prices: [
            { label: "Primary PS5", value: 1899 },
            { label: "Secondary", value: 1349 }
        ],
        tags: ["Action", "Story", "RPG", "Open World"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 48,
        title: "Resident Evil Requiem",
        image: "assets/images/re_requiem.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Horror"],
        desc: "The nightmare returns. Experience the next evolution of survival horror.",
        prices: [
            { label: "Primary PS5", value: 1925 },
            { label: "Secondary", value: 1399 }
        ],
        tags: ["Action", "Story", "Horror"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 49,
        title: "WWE 2K26",
        image: "assets/images/wwe2k26.jpg",
        category: "Sports",
        platform: "PS5",
        rating: 5,
        styles: ["Sports", "Competitive"],
        desc: "The most authentic WWE experience ever. Step into the ring with the biggest superstars and legends.",
        prices: [
            { label: "Primary PS5", value: 1949 },
            { label: "Secondary", value: 1449 }
        ],
        tags: ["Sports", "Competitive", "Action"],
        playStyle: ["Solo", "Online", "Co-op"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 50,
        title: "Borderlands 4",
        image: "assets/images/borderlands4.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Action"],
        desc: "The next chapter in the legendary looter-shooter franchise. New Vault Hunters, new worlds, and billions of guns.",
        prices: [
            { label: "Primary PS5", value: 1549 },
            { label: "Secondary", value: 1049 }
        ],
        tags: ["Action", "Looter-Shooter", "RPG"],
        playStyle: ["Solo", "Online", "Co-op"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 51,
        title: "Reanimal",
        image: "assets/images/reanimal.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Horror"],
        desc: "A dark, atmospheric adventure from the creators of Little Nightmares. Face your deepest fears.",
        prices: [
            { label: "Primary PS5", value: 1125 },
            { label: "Secondary", value: 775 }
        ],
        tags: ["Action", "Horror", "Indie"],
        playStyle: ["Solo", "Co-op"],
        playTime: "1-3",
        difficulty: "Hard"
    },
    {
        id: 52,
        title: "Indiana Jones and the Great Circle",
        image: "assets/images/indiana_jones.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Adventure"],
        desc: "Become the legendary archaeologist in this first-person adventure set between the films.",
        prices: [
            { label: "Primary PS5", value: 1599 },
            { label: "Secondary", value: 1199 }
        ],
        tags: ["Action", "Adventure", "Story"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 53,
        title: "The Last of Us Part II Remastered",
        image: "assets/images/tlou2_remastered.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Action"],
        desc: "Experience the definitive version of the multi-award-winning story with enhanced visuals and new modes.",
        prices: [
            { label: "Primary PS5", value: 899 },
            { label: "Secondary", value: 649 }
        ],
        tags: ["Action", "Story", "Adventure"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 54,
        title: "Clair Obscur: Expedition 33",
        image: "assets/images/expedition33.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "RPG"],
        desc: "A reactive turn-based RPG with stunning realism. Lead the Expedition 33 to destroy the Paintress.",
        prices: [
            { label: "Primary PS5", value: 1249 },
            { label: "Secondary", value: 749 }
        ],
        tags: ["Action", "RPG", "Story"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 55,
        title: "Resident Evil Remake Trilogy",
        image: "assets/images/re_trilogy.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Horror"],
        desc: "The ultimate survival horror collection. Includes Resident Evil 2, 3, and 4 Remakes.",
        prices: [
            { label: "Primary PS5", value: 899 },
            { label: "Primary PS4", value: 449 },
            { label: "Secondary", value: 499 }
        ],
        tags: ["Action", "Horror", "Bundle"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 56,
        title: "Elden Ring Nightreign",
        image: "assets/images/nightreign.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Action"],
        desc: "An expansion to the legend. Discover the secrets of the Nightreign with new bosses and powers.",
        prices: [
            { label: "Primary PS5", value: 849 },
            { label: "Primary PS4", value: 399 },
            { label: "Secondary", value: 479 }
        ],
        tags: ["Action", "RPG", "Open World"],
        playStyle: ["Solo", "Online"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 57,
        title: "Dying Light: The Beast",
        image: "assets/images/dying_light_beast.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Action", "Horror"],
        desc: "A standalone zombie adventure. Play as Kyle Crane and unleash the beast within.",
        prices: [
            { label: "Primary PS5", value: 1349 },
            { label: "Secondary", value: 899 }
        ],
        tags: ["Action", "Zombies", "Parkour"],
        playStyle: ["Solo", "Co-op"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 58,
        title: "A Plague Tale: Innocence",
        image: "assets/images/plague_tale.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Action"],
        desc: "Follow the grim tale of young Amicia and her little brother Hugo through the darkest hours of history.",
        prices: [
            { label: "Primary PS5", value: 279 },
            { label: "Primary PS4", value: 249 },
            { label: "Secondary", value: 179 }
        ],
        tags: ["Action", "Adventure", "Story"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 59,
        title: "A Plague Tale: Requiem",
        image: "assets/images/plague_tale_requiem.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Action"],
        desc: "The heart-rending journey continues. Face the cost of saving those you love.",
        prices: [
            { label: "Primary PS5", value: 599 },
            { label: "Primary PS4", value: 349 },
            { label: "Secondary", value: 329 }
        ],
        tags: ["Action", "Adventure", "Story"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 60,
        title: "Cyberpunk 2077: Phantom Liberty",
        image: "assets/images/phantom_liberty.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Action", "RPG"],
        desc: "*Note: This is an expansion (DLC) / ملحوظة: دي الإضافة الخاصة باللعبة.* Become a secret agent in a spy-thriller expansion.",
        prices: [
            { label: "Primary PS5", value: 1049 },
            { label: "Secondary", value: 749 }
        ],
        tags: ["Action", "RPG", "DLC"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 61,
        title: "The Witcher 3: Wild Hunt (Complete Edition)",
        image: "assets/images/witcher3.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "RPG"],
        desc: "Become a professional monster slayer and embark on an adventure of epic proportions.",
        prices: [
            { label: "Primary PS5", value: 329 },
            { label: "Primary PS4", value: 159 },
            { label: "Secondary", value: 189 }
        ],
        tags: ["Action", "RPG", "Open World"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 62,
        title: "Days Gone Remastered",
        image: "assets/images/days_gone_remastered.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Action", "Horror"],
        desc: "Ride into a desperate world and survive as a drifter and bounty hunter.",
        prices: [
            { label: "Primary PS5", value: 1199 },
            { label: "Secondary", value: 799 }
        ],
        tags: ["Action", "Zombies", "Open World"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 63,
        title: "Tomb Raider: Definitive Survivor Trilogy",
        image: "assets/images/tomb_raider_trilogy.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Action"],
        desc: "Experience the complete origin story of Lara Croft in this definitive collection.",
        prices: [
            { label: "Primary PS5", value: 295 },
            { label: "Primary PS4", value: 295 },
            { label: "Secondary", value: 195 }
        ],
        tags: ["Action", "Adventure", "Bundle"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 64,
        title: "Mafia: Trilogy",
        image: "assets/images/mafia_trilogy.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Action"],
        desc: "Live the life of a gangster across three distinct eras of organized crime in America.",
        prices: [
            { label: "Primary PS5", value: 299 },
            { label: "Primary PS4", value: 279 },
            { label: "Secondary", value: 179 }
        ],
        tags: ["Action", "Crime", "Open World"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 65,
        title: "Uncharted 4: A Thief's End",
        image: "assets/images/uncharted4.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Story", "Action"],
        desc: "Join Nathan Drake on his final globe-trotting adventure in search of lost pirate treasure.",
        prices: [
            { label: "Primary PS5", value: 249 },
            { label: "Primary PS4", value: 279 },
            { label: "Secondary", value: 179 }
        ],
        tags: ["Action", "Adventure", "Story"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 66,
        title: "Uncharted: Legacy of Thieves Collection",
        image: "assets/images/uncharted_legacy.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Story", "Action"],
        desc: "Experience the award-winning cinematic storytelling from Naughty Dog in this remastered collection.",
        prices: [
            { label: "Primary PS5", value: 649 },
            { label: "Secondary", value: 379 }
        ],
        tags: ["Action", "Adventure", "Remastered"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 67,
        title: "Silent Hill f",
        image: "assets/images/silent_hill_f.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Horror", "Action"],
        desc: "A completely new story set in 1960s Japan featuring a beautiful, yet horrifying world.",
        prices: [
            { label: "Primary PS5", value: 1299 },
            { label: "Secondary", value: 749 }
        ],
        tags: ["Horror", "Survival", "Story"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 68,
        title: "Minecraft",
        image: "assets/images/minecraft.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Sandbox", "Action"],
        desc: "Build anything you can imagine in a world that is limited only by your imagination.",
        prices: [
            { label: "Primary PS5", value: 599 },
            { label: "Primary PS4", value: 499 },
            { label: "Secondary", value: 479 }
        ],
        tags: ["Sandbox", "Building", "Survival"],
        playStyle: ["Solo", "Co-op"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 69,
        title: "Call of Duty: Black Ops III",
        image: "assets/images/black_ops_3.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Action", "Shooter"],
        desc: "Combining three unique game modes: Campaign, Multiplayer and Zombies.",
        prices: [
            { label: "Primary PS5", value: 479 },
            { label: "Primary PS4", value: 379 },
            { label: "Secondary", value: 299 }
        ],
        tags: ["Action", "FPS", "Zombies"],
        playStyle: ["Solo", "Co-op", "Multiplayer"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 70,
        title: "Need for Speed Unbound",
        image: "assets/images/nfs_unbound.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Action", "Racing"],
        desc: "Race against the clock, outsmart the cops, and take on weekly qualifiers to reach The Grand.",
        prices: [
            { label: "Primary PS5", value: 479 },
            { label: "Secondary", value: 249 }
        ],
        tags: ["Racing", "Action", "Cars"],
        playStyle: ["Solo", "Multiplayer"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 71,
        title: "Tekken 8",
        image: "assets/images/tekken8.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Action", "Fighting"],
        desc: "The fist meets fate in the latest installment of the legendary fighting game series.",
        prices: [
            { label: "Primary PS5", value: 799 },
            { label: "Secondary", value: 529 }
        ],
        tags: ["Action", "Fighting", "Competitive"],
        playStyle: ["Solo", "Multiplayer"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 72,
        title: "Sonic Frontiers",
        image: "assets/images/sonic_frontiers.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Action", "Adventure"],
        desc: "Sonic's newest high-speed, open-zone adventure across the Starfall Islands.",
        prices: [
            { label: "Primary PS5", value: 589 },
            { label: "Primary PS4", value: 249 },
            { label: "Secondary", value: 299 }
        ],
        tags: ["Action", "Adventure", "Platformer"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 73,
        title: "Sonic x Shadow Generations",
        image: "assets/images/sonic_shadow.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Action", "Adventure"],
        desc: "Play as Shadow in a brand-new story campaign featuring never-before-seen abilities.",
        prices: [
            { label: "Primary PS5", value: 689 },
            { label: "Primary PS4", value: 289 },
            { label: "Secondary", value: 389 }
        ],
        tags: ["Action", "Platformer", "Speed"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 74,
        title: "Sonic Racing Cross Worlds",
        image: "assets/images/sonic_racing.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Action", "Racing"],
        desc: "The ultimate high-speed racing experience across multiple dimensions.",
        prices: [
            { label: "Primary PS5", value: 949 },
            { label: "Primary PS4", value: 549 },
            { label: "Secondary", value: 569 }
        ],
        tags: ["Racing", "Action", "Multiplayer"],
        playStyle: ["Solo", "Multiplayer"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 75,
        title: "NBA 2K26",
        image: "assets/images/nba2k26.jpg",
        category: "Sports",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Sports", "Simulation"],
        desc: "Experience the next level of basketball simulation with updated rosters and improved gameplay.",
        prices: [
            { label: "Primary PS5", value: 599 },
            { label: "Primary PS4", value: 248 },
            { label: "Secondary", value: 349 }
        ],
        tags: ["Sports", "Basketball", "Multiplayer"],
        playStyle: ["Solo", "Multiplayer"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 76,
        title: "Far Cry 6",
        image: "assets/images/farcry6.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Action", "Adventure"],
        desc: "Ignite the revolution and take down the modern-day dictator Anton Castillo.",
        prices: [
            { label: "Primary PS5", value: 279 },
            { label: "Primary PS4", value: 199 },
            { label: "Secondary", value: 169 }
        ],
        tags: ["Action", "Open World", "Shooter"],
        playStyle: ["Solo", "Co-op"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 77,
        title: "Assassin's Creed Origins",
        image: "assets/images/ac_origins.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Action", "RPG"],
        desc: "Explore Ancient Egypt and discover the origin story of the Assassin's Brotherhood.",
        prices: [
            { label: "Primary PS5", value: 279 },
            { label: "Primary PS4", value: 250 },
            { label: "Secondary", value: 189 }
        ],
        tags: ["Action", "Open World", "Assassin"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 78,
        title: "Assassin's Creed® Odyssey",
        image: "assets/images/ac_odyssey.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Action", "RPG"],
        desc: "Write your own epic odyssey and become a legendary Spartan hero in Ancient Greece.",
        prices: [
            { label: "Primary PS5", value: 279 },
            { label: "Primary PS4", value: 250 },
            { label: "Secondary", value: 189 }
        ],
        tags: ["Action", "Open World", "RPG"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 79,
        title: "Kingdom Come: Deliverance II",
        image: "assets/images/kcd2.jpg",
        category: "Action",
        platform: "PS5",
        rating: 5,
        styles: ["Action", "RPG"],
        desc: "A thrilling Action RPG, set amidst the chaos of a civil war in 15th Century Bohemia.",
        prices: [
            { label: "Primary PS5", value: 1049 },
            { label: "Secondary", value: 749 }
        ],
        tags: ["Action", "RPG", "Medieval"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 80,
        title: "Gang Beasts",
        image: "assets/images/gang_beasts.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Action", "Party"],
        desc: "A silly multiplayer party game with surly gelatinous characters and brutal slapstick fight sequences.",
        prices: [
            { label: "Primary PS5", value: 279 },
            { label: "Primary PS4", value: 199 },
            { label: "Secondary", value: 189 }
        ],
        tags: ["Action", "Party", "Multiplayer"],
        playStyle: ["Solo", "Multiplayer"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 81,
        title: "Dying Light 2: Stay Human",
        image: "assets/images/dying_light2.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Action", "Horror"],
        desc: "The virus won and civilization has fallen back into the Dark Ages. Stay human.",
        prices: [
            { label: "Primary PS5", value: 599 },
            { label: "Primary PS4", value: 349 },
            { label: "Secondary", value: 399 }
        ],
        tags: ["Action", "Parkour", "Zombies"],
        playStyle: ["Solo", "Co-op"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 82,
        title: "Little Nightmares III",
        image: "assets/images/little_nightmares3.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Horror", "Puzzle"],
        desc: "Embark on a new adventure in the unique world of Little Nightmares. Face your childhood fears together.",
        prices: [
            { label: "Primary PS5", value: 849 },
            { label: "Primary PS4", value: 399 },
            { label: "Secondary", value: 499 }
        ],
        tags: ["Horror", "Puzzle", "Adventure"],
        playStyle: ["Solo", "Co-op"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 83,
        title: "Marvel's Spider-Man 1",
        image: "assets/images/spiderman1.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Action", "Adventure"],
        desc: "Be greater and explore a new chapter in Marvel's Spider-Man universe as a more experienced Peter Parker.",
        prices: [
            { label: "Primary PS5", value: 449 },
            { label: "Primary PS4", value: 399 },
            { label: "Secondary", value: 349 }
        ],
        tags: ["Action", "Superhero", "Open World"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 84,
        title: "Lies of P",
        image: "assets/images/lies_of_p.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Action", "RPG"],
        desc: "A thrilling soulslike that takes the story of Pinocchio, turns it on its head, and sets it against the darkly elegant backdrop of the Belle Epoque era.",
        prices: [
            { label: "Primary PS5", value: 799 },
            { label: "Primary PS4", value: 449 },
            { label: "Secondary", value: 499 }
        ],
        tags: ["Action", "Soulslike", "RPG"],
        playStyle: ["Solo"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 85,
        title: "Sackboy™: A Big Adventure",
        image: "assets/images/sackboy.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Platformer", "Adventure"],
        desc: "Iconic PlayStation hero Sackboy bursts back into breathtaking action with a huge, fun and frantic 3D multiplayer platforming adventure.",
        prices: [
            { label: "Primary PS5", value: 599 },
            { label: "Primary PS4", value: 349 },
            { label: "Secondary", value: 299 }
        ],
        tags: ["Platformer", "Adventure", "Multiplayer"],
        playStyle: ["Solo", "Multiplayer"],
        playTime: "3+",
        difficulty: "Normal"
    },
    {
        id: 86,
        title: "Cuphead",
        image: "assets/images/cuphead.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Action", "Platformer"],
        desc: "A classic run and gun action game heavily focused on boss battles, inspired by cartoons of the 1930s.",
        prices: [
            { label: "Primary PS5", value: 449 },
            { label: "Primary PS4", value: 199 },
            { label: "Secondary", value: 199 }
        ],
        tags: ["Action", "Platformer", "Hard"],
        playStyle: ["Solo", "Co-op"],
        playTime: "3+",
        difficulty: "Hard"
    },
    {
        id: 87,
        title: "Unravel Two",
        image: "assets/images/unravel2.jpg",
        category: "Action",
        platform: "PS5/PS4",
        rating: 5,
        styles: ["Platformer", "Puzzle"],
        desc: "Build a relationship with other Yarnys in local co-op or as a single player, fostering friendship and support as you journey together.",
        prices: [
            { label: "Primary PS5", value: 199 },
            { label: "Primary PS4", value: 149 },
            { label: "Secondary", value: 139 }
        ],
        tags: ["Platformer", "Puzzle", "Co-op"],
        playStyle: ["Solo", "Co-op"],
        playTime: "3+",
        difficulty: "Normal"
    },
    // --- SUBSCRIPTIONS ---
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

const seedDB = async (isManual = false) => {
    try {
        if (isManual) {
            await sequelize.authenticate();
            console.log('✅ Base Connected');
            await sequelize.sync({ alter: true });
            console.log('✅ Database Synced (Data Preserved)');
        }

        // Upsert games to avoid duplicates
        console.log(`[SEED] Starting upsert for ${games.length} games...`);
        for (let i = 0; i < games.length; i++) {
            const game = games[i];
            console.log(`[SEED] Upserting game ${i + 1}/${games.length}: ${game.title}`);
            await Game.upsert(game);
        }
        console.log(`✅ ${games.length} Games Inserted/Updated`);

        // Production Admin Account Reset
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPass = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPass) {
            console.log('⚠️ [SEED] ADMIN_EMAIL or ADMIN_PASSWORD not found in .env. Skipping admin creation.');
        } else {
            // Check if admin exists by role (so it doesn't create duplicate if email changes)
            const admin = await User.findOne({ where: { role: 'admin' } });

        if (!admin) {
            console.log(`[SEED] Creating production admin account: ${adminEmail}`);
            await User.create({
                email: adminEmail,
                password: adminPass,
                role: 'admin',
                username: 'Admin'
            });
            console.log(`✅ Admin account CREATED.`);
        } else {
            console.log(`[SEED] Admin account exists. Preserving current password.`);
            // Removed the password overwrite block.
        }
        } // End of outer else

        // Close connection ONLY if run directly
        if (require.main === module) {
            await sequelize.close();
            process.exit(0);
        }
    } catch (error) {
        console.error('❌ Seeding Error:', error);
        if (require.main === module) {
            process.exit(1);
        } else {
            throw error;
        }
    }
};

// Check if this file is run directly (node seed.js)
if (require.main === module) {
    seedDB(true);
}

module.exports = { seedDB };
