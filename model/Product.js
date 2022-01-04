const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Please add a product name"],
    unique: true,
  },
  qtyPerUnit: {
    type: Number,
    required: [true, "Please add a Quantity of the Product"],
  },
  unitPrice: {
    type: Number,
    required: [true, "Please add a Unit Price of the Product"],
  },
  unitInStock: {
    type: Number,
    required: [true, "Please add a Unit in Stock"],
  },
  discontinued: {
    type: Boolean,
    default: false,
  },
  categoryId: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
