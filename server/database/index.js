const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lgotl');

let productSchema = mongoose.Schema({
  "name": String,
  "price": Number,
  "description": String,
  "customization": String,
  "choices": Object,
  "image": String,
});

let Product = mongoose.model('Product', productSchema);

module.exports.Product = Product;