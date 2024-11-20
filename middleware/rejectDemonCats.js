const { BadRequestError } = require("../errors");

const rejectDemonCats = function (req, res, next) {
  if (req.body.color?.toLowerCase() === "orange")
    throw BadRequestError("Sorry, we don't accept demon cats");
  next();
};

module.exports = rejectDemonCats;
