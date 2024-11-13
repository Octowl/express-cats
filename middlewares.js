const Cat = require("./api/models/Cat");

const rejectDemonCats = function (req, res, next) {
  if (req.body.color.toLowerCase() === "orange")
    return res
      .status(400)
      .json({ message: "Sorry, we don't accept demon cats" });
  next();
};

const handleErrors = function (err, req, res, next) {
  if (err.name === "ValidationError") {
    let errors = {};

    for (const key in err.errors) {
      errors[key] = err.errors[key].message;
    }

    return res.status(400).json(errors);
  }

  res
    .status(err.status ?? 500)
    .json({ message: err.message ?? "Internal Server Error" });
};

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

module.exports = { rejectDemonCats, handleErrors, findCat };
