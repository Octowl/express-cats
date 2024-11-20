const { NotFoundError } = require("../../errors");
const Cat = require("../../models/Cat");

const findCat = async function (req, res, next, catSlug) {
  const foundCat = await Cat.findOne({ slug: catSlug });

  if (!foundCat) return next(NotFoundError("Cat not found"));

  req.cat = foundCat;

  next();
};

module.exports = findCat;
