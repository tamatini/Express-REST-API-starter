const mongoose = require("mongoose");

function connect(db) {
  try {
    mongoose.connect(db, function () {
      const msg = "Connected to database";
      console.log(msg);
    });
  } catch (err) {
    if (err) return console.log(err);
  };
};

function close() {
  try {
    mongoose.disconnect(function() {
      const msg = "Disconnected from database";
      console.log(msg);
    })
  } catch (err) {
    if (err) return console.log(err);
  };
};

function clearDatabase() {
  try {
    const collections = mongoose.connection.collections;
    for (let key in collections) {
      const collection = collections[key];
      collection.deleteMany(null, null, function(err) {
        if (err) return console.log(err);
      })
    }
  } catch (err) {
    if (err) return console.log(err);
  };
};

module.exports = {
  connect,
  close,
  clearDatabase
};