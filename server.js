const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const connectDB = require("./config/db");
const errorHandler = require("./utils/error");

dotenv.config({ path: "./config/config.env" });

//connect to mongoDb database
connectDB();

//route file
const products = require("./route/products");
const category = require("./route/category");

const app = express();

//body Parser
app.use(express.json());

// dev logging middleware
app.use(morgan("dev"));

app.use("/products/", products);
app.use("/category/", category);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  server.close(() => process.exit(1));
});
