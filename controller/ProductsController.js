const { response } = require("express");
const Express = require("express");
const ProductModel = require("../models/productsModel");
const router = Express.Router();

const updateProductOptions = {
  runValidators: true,
};
/*******GET METHOD(Get all Products)*********/

router.get("/", (req, res, next) => {
  ProductModel.find()
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json({
          message: "Products fetched successfully",
          data: response,
        });
      } else {
        res.status(200).json({
          message: "No Products found",
          data: response,
        });
      }
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({
          message: err.message,
          error: err,
        });
      }
    });
});

/*******GET BY ID. METHOD(Get Products by ID)*********/

router.get("/:id", (req, res, next) => {
  const { params } = req;
  console.log(params);
  ProductModel.find({ _id: params.id })
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json({
          message: "Products fetched successfully",
          data: response,
        });
      } else {
        res.status(200).json({
          message: "No Products found",
          data: response,
        });
      }
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({
          message: err.message,
          error: err,
        });
      }
    });
});

/*******POST METHOD*********/

router.post("/", (req, res, next) => {
  const { body } = req;
  const ProductInstance = new ProductModel({
    name: body.name,
    description: body.description,
    isActive: body.isActive,
    actualPrice: body.actualPrice,
    imgUrl: body.imgUrl,
  });

  ProductInstance.save()
    .then((response) => {
      if (response._id) {
        res.status(200).json({
          message: "Product created succesfully",
          data: response,
        });
      }
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({
          message: err.message,
          error: err,
        });
      }
    });
});

/*******PUT METHOD(Update Product by ID)*********/

router.put("/:id", (req, res, next) => {
  const { body } = req;
  const { params } = req;
  // console.log(body);
  ProductModel.findOneAndUpdate({ _id: params.id }, body, updateProductOptions)
    .then((response) => {
      if (response._id) {
        res.status(200).json({
          message: "Product created succesfully",
          data: response,
        });
      }
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({
          message: err.message,
          error: err,
        });
      }
    });
});

/*******DELETE METHOD(Delete Product by ID)*********/

router.delete("/:id", (req, res, next) => {
  const { body } = req;
  const { params } = req;
  // console.log(body);
  ProductModel.findOneAndDelete({ _id: params.id }, body)
    .then((response) => {
      if (response._id) {
        res.status(200).json({
          message: "Product deleted succesfully",
          data: response,
        });
      }
    })
    .catch((err) => {
      if (err) {
        res.status(400).json({
          message: err.message,
          error: err,
        });
      }
    });
});

module.exports = router;
