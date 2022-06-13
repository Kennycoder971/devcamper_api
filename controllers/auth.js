const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");

// @desc    Register user
// @route   GET /api/v1/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  const token = user.getSignedJwtToken();

  res.status(201).json({ success: true, token });
});

// @desc    Login user
// @route   GET /api/v1/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  // Validate emain and password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  // Check for user
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  const token = user.getSignedJwtToken();

  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  res.status(201).json({ success: true, token });
});