var Record = require('../database').Record;

module.exports = {
  getAll: async function (callback) {
    const records = await Record.find();
    if (!records) {
      callback(err);
    } else {
      callback(null, records);
    }
  }, // a function which gets all the records from the database
  getOne: async function (id, callback) {
    const record = await Record.findById(id).exec();
    if (!record) {
      callback(err);
    } else {
      callback(null, record);
    }
  }, // a function which gets all the records from the database
  create: function (record, callback) {
    console.log(record);

    Record.create(record, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null, 'Success creating record');
      }
    });


    //const records = await Record.find();
    //console.log(records.length);
  } // a function which can be used to insert records into the database
};