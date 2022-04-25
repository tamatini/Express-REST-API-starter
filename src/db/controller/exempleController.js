/** This file serve as an exemple for the starter, delete if not needed. */

function getExemple(req, res) {
  res
    .status(200)
    .json({
      code: 200,
      success: true,
      content: 'This is the Exemple Response'
  });
};

module.exports = {
  getExemple
};