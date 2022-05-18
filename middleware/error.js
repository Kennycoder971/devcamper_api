const ErrorResponse = require("../utils/errorResponse");

/**
 * 描述
 * @date 2022-05-18
 * @description Log errors to the console for the dev
 */
function errorHandler(err, req, res, next) {
  let error = { ...err };

  error.message = err.message;

  console.log(err.stack.red);

  // Mongoose bad object Id
  if (err.name === "CastError") {
    const message = `Ressource not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    console.log(message);
    error = new ErrorResponse(message, 400);
  }

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || "Server Error" });
}

module.exports = errorHandler;
