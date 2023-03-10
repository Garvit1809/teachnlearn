// get all teach cards
// get one teach card
// create teach card

// update teach card
// enroll in class

const express = require("express");
const teachingCardController = require("../controllers/teachingCardController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(teachingCardController.getAllTeachCards)
  .post(teachingCardController.createTeachCard);

router.get('/:id', teachingCardController.getOneTeachCard);

module.exports = router;



