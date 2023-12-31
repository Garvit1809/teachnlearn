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
router.get("/myfavourites", userController.getFavouriteUsers);
router.get("/my-learn-cards", userController.getMyLearnCards);
router.get("/my-teach-cards", userController.getMyTeachCards);
router.get("/my-unreviewd-classes", userController.getMyUnReviewedClass);
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
router.post("/:userId/report", userController.reportUser);
router.patch("/:userId/addfavourite", userController.addUserToFavourites);

module.exports = router;
