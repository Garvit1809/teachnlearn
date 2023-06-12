// get my classrooms
// get classroom

const Classroom = require("../models/classroomModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllClassrooms = catchAsync(async (req,res,next) => {
    const userID = req.user.id;
    // const classrooms = await Classroom.find({  }) 
})

exports.getClassroom = catchAsync(async (req,res,next) => {
    const classroomID = req.params.classroomId;

    const classroom = await Classroom.findById(classroomID)

    if (!classroom) {
        return next(new AppError('Couldnt find Classroom with such ID!!'))
    }

    res.status(200).json({
        status: 'success',
        classroom
    })
})