// get all teach cards
// get one teach card
// create teach card
// enroll in class

// update teach card

// top 5 cards
// filter --> getAll

const express = require("express");
const teachingCardController = require("../controllers/teachingCardController");
const { protect } = require("../controllers/authController");
const announcementRouter = require("./announcementRouter");
const reviewRouter = require("./reviewRoutes");

const router = express.Router();

router.use("/:teachingCardId/announcements", announcementRouter);
router.use("/:teachingCardId/reviews", reviewRouter);

router.use(protect);

router
  .route("/")
  .get(teachingCardController.getAllTeachCards)
  .post(teachingCardController.createTeachCard);

router.get("/:teachCardId", teachingCardController.getOneTeachCard);
router.get(
  "/:teachCardId/overview",
  teachingCardController.getTeachCardOverview
);

router.patch(
  "/:teachCardId/interested",
  teachingCardController.interestedInTeachCard
);

router.patch("/:teachCardId/enroll", teachingCardController.enrollInClass);

module.exports = router;
