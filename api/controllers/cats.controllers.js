const Cat = require("../models/Cat");

const catList = async function (req, res, next) {
  const { name } = req.query;

  try {
    const cats = await Cat.find(
      { name: { $regex: name ?? "", $options: "i" } },
      "-__v"
    );
    res.status(200).json(cats);
  } catch (error) {
    next(error);
  }
};

const catDetail = async function (req, res) {
  res.status(200).json(req.cat);
};

const createCat = async function (req, res, next) {
  try {
    const newCat = await Cat.create(req.body);
    res.status(201).json(newCat);
  } catch (error) {
    next(error);
  }
};

const updateCat = async function (req, res, next) {
  try {
    for (const key in req.body) req.cat[key] = req.body[key];
    req.cat.save();
    res.status(200).json(req.cat);
  } catch (error) {
    next(error);
  }
};

const deleteCat = async function (req, res, next) {
  try {
    await req.cat.deleteOne();
  } catch (error) {
    next(error);
  }
  res.status(204).end();
};

module.exports = {
  catList,
  catDetail,
  createCat,
  updateCat,
  deleteCat,
};
