const express = require("express");
const Router = express.Router();

// customize the default route here
// Will probably add swagger later on.
Router.get('/', (req, res) => { 
  res
    .status(200)
    .json({
      status: 200,
      success: true,
      content: "This is the default api address"
    })
});

/** Import your custom routes here. Ex: const exempleRoute = require('./exempleRoute');
* Delete the exemple when adding your custom routes */
const exempleRoute = require('./exemplesRoutes');

/** Add your custom routes here. Ex: Router.use('/', exempleRoute)
* Delete the exemple when adding your custom routes */
Router.use('/exemple', exempleRoute);

module.exports = Router;