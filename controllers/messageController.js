const Chat = require("../models/chatModel");
const Message = require("../models/messageModel");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.allMessages = catchAsync(async (req, res) => {
  const chatId = req.params.id;

  if (!chatId) {
    return next(new AppErrorr("Provide a chat id!!"));
  }

  const messages = await Message.find({ chat: chatId })
    .populate("sender", "name userName photo")
    .limit(20);

  res.status(200).json({
    status: "success",
    msgs: messages,
  });
});

exports.sendMessage = catchAsync(async (req, res, next) => {
  const chatId = req.params.id;
  const content = req.body.chatMessage;

  if (!content || !chatId) {
    return next(new AppError("Invalid data passed into request"));
  }

  var newMessage = {
    sender: req.user.id,
    content: content,
    chat: chatId,
  };

  var message = await Message.create(newMessage);

  message = await message.populate("sender", "name photo");
  message = await message.populate("chat", "chatName");
  message = await User.populate(message, {
    path: "chat.users",
    select: "name",
  });

  await Chat.findByIdAndUpdate(chatId, { latestMessage: message });

  res.json({
    status: "success",
    msg: message,
  });
});
