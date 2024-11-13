const rejectDemonCats = function (req, res, next) {
  if (req.body.color.toLowerCase() === "orange")
    return res
      .status(400)
      .json({ message: "Sorry, we don't accept demon cats" });
  next();
};

module.exports = rejectDemonCats;
