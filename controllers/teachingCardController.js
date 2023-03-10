const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const LearningCard = require("../models/learningCard");
const TeachingCard = require("../models/teachingCard");


exports.getAllTeachCards = factory.getAll(TeachingCard);
exports.getOneTeachCard = factory.getOne(TeachingCard)
exports.createTeachCard = factory.createOne(TeachingCard)
