const express = require('express');
const { protect } = require('../controllers/authController');
const userController = require("../controllers/userController");

const router = express.Router();

router.use(protect)

router.get('/me', userController.getMe, userController.getUser);

module.exports = router;