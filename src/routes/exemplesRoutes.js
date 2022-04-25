/** This file serve as an exemple for the starter, delete if not needed. */
const express = require('express');
const Router = express.Router();
const exempleController = require('../db/controller/exempleController');

Router.get('/', exempleController.getExemple);

module.exports = Router;