const express = require('express');
const { protect } = require('../controllers/authController');
const userController = require("../controllers/userController");

const router = express.Router();

router.use(protect)

router.get('/:userId', userController.getUser);

router.get('/me', userController.getMe, userController.getUser);
router.patch('/updateMe', userController.updateMe);
router.patch('/deleteMe', userController.deleteMe);

// my profile
// user profile

// update user profile image
// changing username

// referral friend --> API with users ID

// purchase coins

module.exports = router;