var models = require('../models/products.js');

module.exports = {
  get: function (req, res) {
    models.getAll((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }, // a function which handles a get request for all products
  post: function (req, res) {

    models.create(req.body.product, (err, data) => {
      if (err) {
        res.status(500).send('Error: ' + err);
      } else {
        res.status(200).send(data);
      }
    });
  } // a function which handles posting products to the database
};
