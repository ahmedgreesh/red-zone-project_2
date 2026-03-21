const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, updateWishlist, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.put('/wishlist', protect, updateWishlist);

module.exports = router;
