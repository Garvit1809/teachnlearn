// get all learning routes
// get one learning route

// get teaching routes spoecific to one learning route
// create learning card

const express = require("express");
const learningCardController = require("../controllers/learningCardController");
const { protect } = require("../controllers/learningCardController");

const router = express.Router();

router
  .route("/")
  .get(learningCardController.getAllCards)
  .post(learningCardController.postCard);

router.get('/:id', learningCardController.getOneCard);
router.get('/:id/teach', learningCardController.getTeachCards);

module.exports = router;
