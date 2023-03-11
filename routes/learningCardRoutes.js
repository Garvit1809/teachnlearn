// get all learning routes
// get one learning route
// create learning card
// get teaching cards spoecific to one learning route
// create teach card on learning card

const express = require("express");
const learningCardController = require("../controllers/learningCardController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(learningCardController.getAllLearnCards)
  .post(learningCardController.createLearnCard);

router.get('/:id', learningCardController.getOneLearnCard);
router.get('/:id/teach', learningCardController.getTeachCardsOnLearnCard);
router.post('/:id/teach', learningCardController.createTeachCardOnLearnCard)


module.exports = router;
