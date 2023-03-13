const Message = require("../models/messageModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const factory = require('./handlerFactory');

exports.getMesages = factory.getAll(Message);

exports.postMessage = catchAsync(async (req,res,next) => {
    const classroomID = req.params.classroomId;
    const userID = req.user.id;
    const { content } = req.body;

    const newMessage = await Message.create({
        sender: userID,
        content,
        classroom: classroomID,
    })

    if (!newMessage) {
        return next(new AppError('Message couldnt be created!!'))
    }

    res.statsu(201).json({
        status: 'success',
        newMessage
    })
})