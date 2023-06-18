const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  model: {
    type: String,
  },
  vehicle_type: {
    type: String,
  },
  release_year: {
    type: Number,
  },
  maximum_power: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", productSchema);
