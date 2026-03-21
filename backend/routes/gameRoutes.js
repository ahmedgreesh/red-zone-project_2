const express = require('express');
const router = express.Router();
const { getGames, getGameById, createGame } = require('../controllers/gameController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', getGames);
router.get('/:id', getGameById);
router.post('/', protect, admin, createGame);

module.exports = router;
