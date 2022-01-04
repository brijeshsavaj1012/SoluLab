const asyncHandler = require("../middleware/async");
const Category = require("../model/Category");
const Product = require("../model/Product");

exports.createProduct = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.body.categoryId);

  if (!category) {
    return next(Error("dsadasd", 404));
  }

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    data: product,
  });
});

exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate({
    path: "categoryId",
  });

  res.status(201).json({
    success: true,
    data: product,
  });
});

exports.getProducts = asyncHandler(async (req, res, next) => {
  const product = await Product.find().populate({ path: "categoryId" });

  res.status(201).json({
    success: true,
    data: product,
  });
});

exports.updateProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    success: true,
    data: product,
  });
});

exports.deleteProduct = asyncHandler(async (req, res, next) => {
  await Product.findByIdAndRemove(req.params.id);

  res.status(201).json({
    success: true,
    data: {},
  });
});
