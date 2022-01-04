const express = require("express");
const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/products");

const router = express.Router();

router.route("/create").post(createProduct);

router.route("/read/:id").get(getProduct);

router.route("/readAll").get(getProducts);

router.route("/update/:id").put(updateProduct);

router.route("/delete/:id").delete(deleteProduct);

module.exports = router;
