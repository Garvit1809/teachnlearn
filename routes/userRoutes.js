const express = require("express");
const { protect } = require("../controllers/authController");
const userController = require("../controllers/userController");
const teachingCardController = require("../controllers/teachingCardController");

const router = express.Router();

router.use(protect);

router.get("/me", userController.getMe, userController.getUser);
router.get("/myclasses", teachingCardController.getUserEnrolledClasses);
router.get("/myclasses/completed", teachingCardController.getCompletedClasses);
router.get("/myclasses/upcoming", teachingCardController.getUpcomingClasses);
router.post("/my-feedback", userController.postUserFeedback);
router.patch("/deleteMe", userController.deleteMe);
router.patch("/myMode", userController.updateUserMode);
router.patch("/myInfo", userController.updateUserInfo);
router.patch("/mycontactInfo", userController.updateUserContactInfo);
router.patch("/myPhoto", userController.updateUserPhoto);
router.patch("/myacademicInfo", userController.updateUserAcademicInfo);
router.get("/mybalance", userController.getUserBalance);
router.post("/search", userController.searchInApplication);
router.get("/:userId", userController.getOtherUser);
router.get("/:userId/myratings", userController.getUserRatings);
router.patch("/:userId/addfavourite", userController.addUserToFavourites);
router.post(":/userId/report", userController.reportUser);

module.exports = router;
