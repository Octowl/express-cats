const Cat = require("../api/models/Cat");

const findCat = async function (req, res, next, catSlug) {
  let foundCat;

  try {
    foundCat = await Cat.findOne({ slug: catSlug });
    if (!foundCat) {
      const error = new Error("Cat not found");
      error.status = 404;
      return next(error);
    }
  } catch (error) {
    next(error);
  }

  req.cat = foundCat;
  next();
};

module.exports = findCat;
