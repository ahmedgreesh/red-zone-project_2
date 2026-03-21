const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Game = sequelize.define('Game', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    platform: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 5
    },
    styles: {
        type: DataTypes.TEXT, // Store as JSON string
        defaultValue: '[]',
        get() {
            const rawValue = this.getDataValue('styles');
            return rawValue ? JSON.parse(rawValue) : [];
        },
        set(value) {
            this.setDataValue('styles', JSON.stringify(value));
        }
    },
    desc: {
        type: DataTypes.TEXT
    },
    prices: {
        type: DataTypes.TEXT, // Store as JSON string
        defaultValue: '[]',
        get() {
            const rawValue = this.getDataValue('prices');
            return rawValue ? JSON.parse(rawValue) : [];
        },
        set(value) {
            this.setDataValue('prices', JSON.stringify(value));
        }
    },
    tags: {
        type: DataTypes.TEXT, // Store as JSON string
        defaultValue: '[]',
        get() {
            const rawValue = this.getDataValue('tags');
            return rawValue ? JSON.parse(rawValue) : [];
        },
        set(value) {
            this.setDataValue('tags', JSON.stringify(value));
        }
    },
    playStyle: {
        type: DataTypes.TEXT, // Store as JSON string
        defaultValue: '[]',
        get() {
            const rawValue = this.getDataValue('playStyle');
            return rawValue ? JSON.parse(rawValue) : [];
        },
        set(value) {
            this.setDataValue('playStyle', JSON.stringify(value));
        }
    },
    playTime: {
        type: DataTypes.STRING
    },
    difficulty: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 10
    }
});

module.exports = Game;
