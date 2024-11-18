const Cat = require("../models/Cat");

const catList = async function (req, res) {
  const { name } = req.query;

  const cats = await Cat.find(
    { name: { $regex: name ?? "", $options: "i" } },
    "-__v"
  );
  res.status(200).json(cats);
};

const catDetail = async function (req, res) {
  res.status(200).json(req.cat);
};

const createCat = async function (req, res) {
  if (req.file) req.body.image = req.file.location;
  const newCat = await Cat.create(req.body);
  res.status(201).json(newCat);
};

const updateCat = async function (req, res) {
  if (req.file)
    req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path}`;

  for (const key in req.body) req.cat[key] = req.body[key];

  req.cat.save();
  res.status(200).json(req.cat);
};

const deleteCat = async function (req, res) {
  await req.cat.deleteOne();
  res.status(204).end();
};

module.exports = {
  catList,
  catDetail,
  createCat,
  updateCat,
  deleteCat,
};
