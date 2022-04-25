const app = require("./app");
const server = require("./src/db/index");
const config = require('./config');

const PORT = config.express.config.port;
const HOST = config.express.config.host;
const db = config.mongodb.config.uri;
const options = config.mongodb.options;

const listen = app.listen(PORT, HOST, function () {
    const msg = `Application is running on ${HOST}:${PORT}/api/v1`;
    console.log(msg);
  });

function main() {
  server.connect(db, options, function () {
    listen;
  });
};

if (require.main === module) {
  main();
};