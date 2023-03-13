var Product = require('../database').Product;

module.exports = {
  getAll: async function (callback) {
    const products = await Product.find();
    if (!products) {
      callback(err);
    } else {
      callback(null, products);
    }
  }, // a function which gets all the products from the database
  getOne: async function (id, callback) {
    const product = await Product.findById(id).exec();
    if (!product) {
      callback(err);
    } else {
      callback(null, product);
    }
  }, // a function which gets all the products from the database
  create: function (product, callback) {
    console.log("PRODUCT: ", product);

    Product.create(product, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null, 'Success creating product');
      }
    });


    //const products = await Product.find();
    //console.log(products.length);
  } // a function which can be used to insert products into the database
};
