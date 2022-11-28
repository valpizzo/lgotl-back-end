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

let eventSchema = mongoose.Schema({
  "name": String,
  "street": String,
  "city": String,
  "state": String,
  "zip": Number,
  "description": String,
  "start_time": String,
  "end_time": String,
  "date": Date,
  "image": String,
});

let Product = mongoose.model('Product', productSchema);
let Event = mongoose.model('Event', eventSchema);

module.exports.Product = Product;
module.exports.Event = Event;