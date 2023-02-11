const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  actualPrice: { type: Number, required: true },
  isActive: { type: Boolean, default: false },
  imgUrl: { type: String, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);
