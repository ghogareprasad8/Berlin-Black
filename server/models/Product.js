
// models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  sizes: [String],
  imageUrls: [String],
  inventory: Number
});

module.exports = mongoose.model('Product', ProductSchema);
