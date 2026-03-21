const Game = require('../models/Game');

// @desc    Get all games
// @route   GET /api/games
// @access  Public
const getGames = async (req, res) => {
    try {
        const games = await Game.findAll();
        res.json(games);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get game by ID
// @route   GET /api/games/:id
// @access  Public
const getGameById = async (req, res) => {
    try {
        const game = await Game.findOne({ where: { id: req.params.id } });
        if (game) {
            res.json(game);
        } else {
            res.status(404).json({ message: 'Game not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Create a game
// @route   POST /api/games
// @access  Private/Admin
const createGame = async (req, res) => {
    try {
        const game = await Game.create(req.body);
        res.status(201).json(game);
    } catch (error) {
        res.status(400).json({ message: 'Invalid game data' });
    }
};

module.exports = {
    getGames,
    getGameById,
    createGame
};
