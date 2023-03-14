// signup
// login

// forget password
// reset password
// change password

// my profile
// user profile

// purchase coins

const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);



module.exports = router;
