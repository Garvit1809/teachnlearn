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

const router = express.Router();

router.use("/:teachingCardId/announcements", announcementRouter);

router
  .route("/")
  .get(teachingCardController.getAllTeachCards)
  .post(protect, teachingCardController.createTeachCard);

router.get("/:teachCardId", teachingCardController.getOneTeachCard);

router.use(protect);

router.patch(
  "/:teachCardId/interested",
  teachingCardController.interestedInTeachCard
);

router.patch("/:teachCardId/enroll", teachingCardController.enrollInClass);

module.exports = router;
