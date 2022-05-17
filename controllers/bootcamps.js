// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: "true", message: "Hi" });
};

// @desc    Get a bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: "true", message: `Get bootcamp ${req.params.id}` });
};

// @desc    Create new bootcamps
// @route   POST /api/v1/bootcamps
// @access  Private

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: "true", message: `Create bootcamp` });
};

// @desc    Update bootcamps
// @route   PUT /api/v1/bootcamps/:id
// @access  Private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: "true", message: `Update bootcamp ${req.params.id}` });
};

// @desc    Delete bootcamps
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: "true", message: `Delete bootcamp ${req.params.id}` });
};
