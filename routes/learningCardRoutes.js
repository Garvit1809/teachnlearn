const express = require("express");
const learningCardController = require("../controllers/learningCardController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router.get("/top-requests", protect, learningCardController.topLearnCards);

router
  .route("/")
  .get(learningCardController.getAllLearnCards)
  .post(protect, learningCardController.createLearnCard);

router.get("/:learnCardId", learningCardController.getOneLearnCard);
router.get(
  "/:learnCardId/teach",
  learningCardController.getTeachCardsOnLearnCard
);

router.use(protect);
router.post(
  "/:learnCardId/teach",
  learningCardController.createTeachCardOnLearnCard
);
router.patch(
  "/:learnCardId/interested",
  learningCardController.interestedInLearnCard
);

// filter learn card using tags
// search learn card

module.exports = router;
