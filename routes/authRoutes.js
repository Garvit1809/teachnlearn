const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

// forget password
// reset password
// change password

module.exports = router;
