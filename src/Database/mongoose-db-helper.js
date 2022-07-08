const mongoose = require("mongoose");

function connect(db, options) {
  mongoose.connect(db, options, function () {
    const msg = `Connected to database ${options.dbName}`;
    console.log(msg);
  });
};

function close() {
  mongoose.disconnect(function() {
    const msg = `Disconnected from database`;
    console.log(msg);
  })
};

function clearDatabase() {
  const collections = mongoose.connection.collections;
  for (let key in collections) {
    const collection = collections[key];
    collection.deleteMany(null, null, function(err) {
      if (err) return console.log(err);
    })
  }
};

module.exports = {
  connect,
  close,
  clearDatabase
};