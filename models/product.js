const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: [String],
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
  vehicle_type: {
    type: String,
    required: true,
  },
  release_year: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
  maximum_power: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", productSchema);
