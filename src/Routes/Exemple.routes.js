/** This file serve as an exemple for the starter, delete if not needed. */
const express = require('express');
const Router = express.Router();
const exempleController = require('../Database/Controller/exempleController');

Router
    .get('/', exempleController.getExemple)
    .get('/:id')

module.exports = Router;