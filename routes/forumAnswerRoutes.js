const express = require("express");
const forumAnswerController = require("../controllers/forumAnswerController");

const router = express.Router({ mergeParams: true });

router.route("/").post(forumAnswerController.createAnswer);
router.route("/:answerId").patch(forumAnswerController.upvoteForum);

module.exports = router;
