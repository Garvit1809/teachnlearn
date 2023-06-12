const express = require("express");
const { protect } = require("../controllers/authController");
const userController = require("../controllers/userController");
const teachingCardController = require("../controllers/teachingCardController");

const router = express.Router();

router.use(protect);

router.get("/me", userController.getMe, userController.getUser);
router.get("/myclasses", teachingCardController.getUserEnrolledClasses);
router.patch("/deleteMe", userController.deleteMe);

router.get("/:userId", userController.getOtherUser);

// router.patch("/updateMe", userController.updateMe);

// my profile
// user profile

// update user profile image
// changing username

// referral friend --> API with users ID

// purchase coins

module.exports = router;
