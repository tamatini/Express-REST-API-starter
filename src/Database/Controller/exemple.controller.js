/** This file serve as an exemple for the starter, delete if not needed. */
const Exemple = require('../Models/mongoose-exemple.model');

const findExemple = Exemple.find().exec();

function findSingleExemple(id) {
  Exemple.findOne({$where: { id: id }})
  .exec()
  .then(function(res) {
    return res;
  })
  .catch(function(err) {
    if (err) return console.log(err);
  })
}

function getExemple(req, res) {
  res
  .status(200)
  .json({
    success: true,
    code: 200,
    exemples: findExemple
  })
};

function getSingleExemple(req, res) {
  let exemple = findSingleExemple(req.params.id);
  res
  .status(200)
  .json({
    success: true,
    code: 200,
    exemple: exemple
  })
}


 
module.exports = {
  getExemple,
  getSingleExemple
};