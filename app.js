/** Don't configure anything here, either use a .env file and pass your configuration in config.js file or
* save your configuration as environnement variable. */
const express = require("express");
const route = require("./src/routes/index");
const Cors = require("cors");
const morgan = require("morgan");
const config = require("./config");
const app = express();

// Configurations
app.use(express.json());
app.use(express.urlencoded(config.express.options.urlencoded));
const logs = morgan(config.morgan.type, config.morgan.options);
const cors = Cors(config.cors.options);

// Default Routes. Add your custom routes in "./src/routes/index.js"
app.use("/api/v1", cors, logs, route);
app.use("/", cors, logs, function(req, res) { res.redirect("/api/v1") })
app.use( function (req, res) { res.sendStatus(404)});

module.exports = app;