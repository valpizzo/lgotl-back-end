var Event = require('../database').Event;

module.exports = {
  getAll: async function (callback) {
    const events = await Event.find();
    if (!events) {
      callback('Getting all events has failed');
    } else {
      callback(null, events);
    }
  }, // a function which gets all the events from the database
  getOne: async function (id, callback) {
    const event = await Event.findById(id).exec();
    if (!event) {
      callback('Getting this event has failed');
    } else {
      callback(null, event);
    }
  }, // a function which gets all the events from the database
  create: function (event, callback) {
    Event.create(event, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null, 'Success creating event');
      }
    });
  }, // a function which can be used to insert events into the database
  remove: async function (id, callback) {
    //console.log(id);
    const event = await Event.deleteOne({ _id: id });
    if (!event) {
      callback('Deleting this event has failed');
    } else {
      callback(null, event);
    }
  }, // a function which can be used to remove an event from the database
};
