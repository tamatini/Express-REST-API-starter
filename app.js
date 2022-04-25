/**
* Don't configure anything here, either use a .env file and pass your configuration in config.js file or
* save your configuration as environnement variable. 
*/

const express = require("express");
const route = require("./src/routes/index");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Configurations
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/** 
* Morgan configuration: dev, short, tiny, combined, common
* you save your logs inside a file using the morgan option "stream"
* and pass the log file address. 
*/
const morganOption = {
  // Add your options here 
  // ex: "stream": filepath
  
}
const logs = morgan("combined", morganOption);

// Cors configuration
const corsOptions = {
  "origin": "*",
  "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
  "preflightContinue": false,
  "optionsSucessStatus": 204
};

// Default Routes - Add your custom routes in "./src/routes/index.js"
app.use("/api/v1", cors(corsOptions), logs, route);

// 404
app.use((req, res) => {
  res.sendStatus(404)
});

module.exports = app;