const express = require("express");
const learningCardController = require("../controllers/announcementController");
const { protect } = require("../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(protect);

// get all ano
// post annou


module.exports = router;
