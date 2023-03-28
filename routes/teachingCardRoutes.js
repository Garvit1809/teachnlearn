// get all teach cards
// get one teach card
// create teach card
// enroll in class

// update teach card

const express = require("express");
const teachingCardController = require("../controllers/teachingCardController");
const { protect } = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(teachingCardController.getAllTeachCards)
  .post(protect, teachingCardController.createTeachCard);

// top 5 teach Cards --> interested

router.get('/:teachCardId', teachingCardController.getOneTeachCard);

router.use(protect);

router.patch('/:teachCardId/enroll', teachingCardController.enrollInClass);

module.exports = router;



