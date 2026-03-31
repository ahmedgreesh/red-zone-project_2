const express = require('express');
const router = express.Router();
const { getGames, getGameById } = require('../controllers/gameController');
const cacheMiddleware = require('../middleware/cacheMiddleware');


router.get('/', cacheMiddleware(60), getGames);
router.get('/:id', cacheMiddleware(60), getGameById);


module.exports = router;
