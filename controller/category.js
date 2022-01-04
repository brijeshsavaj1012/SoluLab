const asyncHandler = require("../middleware/async");
const Category = require("../model/Category");

exports.createCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.create(req.body);

  res.status(201).json({
    success: true,
    data: category,
  });
});
exports.getCategorys = asyncHandler(async (req, res, next) => {
  const category = await Category.find();

  res.status(201).json({
    success: true,
    data: category,
  });
});
