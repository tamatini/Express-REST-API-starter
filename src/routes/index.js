const express = require("express");
const Router = express.Router();

Router.get('/', (req, res) => {
  res.send("This is the API default route")
});

/**
* Import your custom routes here
* Ex: const exempleRoute = require('./exempleRoute');
*/



/** 
* Add your custom routes here.
* ex: Router.get('/', exempleRoute)
*/

module.exports = Router;