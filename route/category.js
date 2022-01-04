const express = require("express");
const { createCategory, getCategorys } = require("../controller/category");

const router = express.Router();

router.route("/create").post(createCategory);
router.route("/readAll").get(getCategorys);

module.exports = router;
