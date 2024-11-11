const uuid4 = require("uuid4");
const cats = require("../../data/cats");

const findCat = function (catId, res) {
  const foundCat = cats.find((cat) => cat.id === catId);
  if (!foundCat) res.status(404).json({ message: "Cat Not Found" });

  return foundCat;
};

const catList = function (req, res) {
  const { name } = req.query;

  let filteredCats = cats;

  if (name)
    filteredCats = cats.filter((cat) =>
      cat.name.toLowerCase().includes(name.toLowerCase())
    );

  res.status(200).json(filteredCats);
};

const catDetail = function (req, res) {
  const foundCat = findCat(req.params.catId, res);
  res.status(200).json(foundCat);
};

const createCat = function (req, res) {
  const { name, age, breed, color } = req.body;

  if (!name || !age || !breed || !color)
    res.status(400).json({ message: "Bad Request" });

  const newCat = {
    id: uuid4(),
    name,
    age,
    breed,
    color,
    adopted: false,
  };
  cats.unshift(newCat);
  res.status(201).json(newCat);
};

const updateCat = function (req, res) {
  const foundCat = findCat(req.params.catId, res);

  const { name, age, breed, color, adopted } = req.body;

  if (!name || !age || !breed || !color || adopted === undefined)
    res.status(400).json({ message: "Bad Request" });

  foundCat.name = name;
  foundCat.age = age;
  foundCat.color = color;
  foundCat.breed = breed;
  foundCat.adopted = adopted;

  res.status(200).json(foundCat);
};

const deleteCat = function (req, res) {
  const foundCat = findCat(req.params.catId, res);

  const catIndex = cats.findIndex((cat) => cat.id === req.params.catId);
  cats.splice(catIndex, 1);

  res.status(204).end();
};

module.exports = {
  catList,
  catDetail,
  createCat,
  updateCat,
  deleteCat,
};
