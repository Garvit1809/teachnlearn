const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
    trim: true,
  },
  userName: {
    type: String,
    required: [true, "Please provide a username!!"],
    trim: true,
    unique: true,
    max: [25, "Username must be less than 25 characters"],
  },
  tagline: {
    type: String,
    trim: true,
    min: [30, "Tagline should be atleast 30 characters long"],
  },
  // can change in 60 days
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: {
    type: String,
    default:
      "https://w7.pngwing.com/pngs/442/477/png-transparent-computer-icons-user-profile-avatar-profile-heroes-profile-user.png",
  },
  phoneNumber: {
    type: String,
    required: [true, "Please provide a contact number"],
    // select: false,
  },
  enrolledProgramme: {
    type: String,
    required: true,
    trim: true,
  },
  interestedSubjects: [
    {
      type: String,
      trim: true,
    },
  ],
  strongSubjects: [
    {
      type: String,
      trim: true,
    },
  ],
  preferredLanguages: [
    {
      type: String,
      trim: true,
    },
  ],
  role: {
    type: String,
    enum: ["teach", "learn"],
    default: "learn",
  },
  coins: {
    type: Number,
    default: 1000000,
  },
  forumCoins: {
    type: Number,
    default: 0,
  },
  classesEnrolled: [
    {
      class: {
        type: mongoose.Schema.ObjectId,
        ref: "TeachingCard",
        required: [true, "Must specify the classroom ID!!"],
      },
      isReviewed: {
        type: Boolean,
        default: false,
      },
      endsAt: {
        type: Date,
        required: [true, "Please specify the end timing of the class!!"],
      },
    },
  ],
  classesTaken: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "TeachingCard",
    },
  ],
  transactionHistory: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "TransactionHistory",
      select: false,
    },
  ],
  referrals: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      select: false,
    },
  ],
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: process.env.PASSWORD_MIN_LENGTH,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  console.log({ resetToken }, this.passwordResetToken);

  // 10 min password reset limit
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
