const Game = require('../models/Game');
const logger = require('../utils/logger');

// @desc    Get all games
// @route   GET /api/games
// @access  Public
const getGames = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const offset = (page - 1) * limit;

        const { count, rows: games } = await Game.findAndCountAll({
            limit,
            offset,
            order: [['createdAt', 'DESC']]
        });

        res.json({
            success: true,
            data: games,
            pagination: {
                total: count,
                page,
                limit,
                lastPage: Math.ceil(count / limit)
            }
        });
    } catch (error) {
        logger.error('[getGames] Error: %O', error);
        res.status(500).json({ 
            success: false,
            message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً',
            error: error.message 
        });
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
        logger.error('[getGameById] Error: %O', error);
        res.status(500).json({ message: 'حدث خطأ غير متوقع، يرجى المحاولة لاحقاً' });
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
        logger.error('[createGame] Error: %O', error);
        res.status(400).json({ message: 'Invalid game data' });
    }
};

module.exports = {
    getGames,
    getGameById,
    createGame
};
