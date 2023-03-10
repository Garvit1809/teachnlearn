const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const LearningCard = require("../models/learningCard");
const TeachingCard = require("../models/teachingCard");

exports.getAllCards = factory.getAll(LearningCard);
exports.getOneCard = factory.getOne(LearningCard);
exports.postCard = factory.createOne(LearningCard);
exports.getTeachCards = factory.getAll(TeachingCard);
