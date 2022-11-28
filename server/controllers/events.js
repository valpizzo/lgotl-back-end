var models = require('../models/events.js');

module.exports = {
  get: function (req, res) {
    models.getAll((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }, // a function which handles a get request for all events
  getEvent: function (req, res) {
    models.getOne(req.params.id, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }, // a function which handles a get request for a specific event
  post: function (req, res) {
    models.create(req.body, (err, data) => {
      if (err) {
        res.status(500).send('Error: ' + err);
      } else {
        res.status(200).send(data);
      }
    });
  }, // a function which handles posting events to the database
  delete: function (req, res) {

    models.remove(req.params.id, (err, data) => {
      if (err) {
        res.status(500).send('Error: ' + err);
      } else {
        res.status(200).send(data);
      }
    });
  } // a function which handles deleting an event from the database
};
