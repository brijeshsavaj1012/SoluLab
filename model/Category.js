const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: [true, "Please add a Category Name"],
    unique: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
