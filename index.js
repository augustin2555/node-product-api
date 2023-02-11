const express = require("express");
const app = express();
const ProductController = require("./controller/ProductsController");

//REGISTERING CONTROLLER
app.use("/products", ProductController);

module.exports = app;
