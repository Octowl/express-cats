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

module.exports = handleErrors;
