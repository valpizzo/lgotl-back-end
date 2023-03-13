var models = require('../models/records.js');

module.exports = {
  get: function (req, res) {
    models.getAll((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }, // a function which handles a get request for all records
  getItem: function (req, res) {
    models.getOne(req.params.id, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }, // a function which handles a get request for a specific record
  post: function (req, res) {

    models.create(req.body, (err, data) => {
      if (err) {
        res.status(500).send('Error: ' + err);
      } else {
        res.status(200).send(data);
      }
    });
  } // a function which handles posting records to the database
};
