const app = require("./app");
const server = require("./src/db/index");

const PORT = 5000;
const HOST = "127.0.0.1";
const db = "mongodb://localhost:27017/test"

const listen = app.listen(PORT, HOST, function () {
    const msg = `Application is running on ${HOST}:${PORT}/api/v1`;
    console.log(msg);
  });

function main() {
  try {
    server.connect(db, function () {
      listen();
    });
  } catch (err) {
    if (err) return console.log(err);
  }
};

if (require.main === module) {
  main();
};