const express = require("express");
const cats = require("./cats");
const uuid4 = require("uuid4");

const app = express();

app.use(express.json());

app.get("/cats", (req, res) => {
  res.status(200).json(cats);
});

app.get("/cats/:catId", (req, res) => {
  const foundCat = cats.find((cat) => cat.id === req.params.catId);
  if (!foundCat) res.status(404).json({ message: "Cat Not Found" });
  res.status(200).json(foundCat);
});

app.post("/cats", (req, res) => {
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
});

app.put("/cats/:catId", (req, res) => {
  const foundCat = cats.find((cat) => cat.id === req.params.catId);
  if (!foundCat) res.status(404).json({ message: "Cat Not Found" });

  const { name, age, breed, color, adopted } = req.body;

  if (!name || !age || !breed || !color || adopted === undefined)
    res.status(400).json({ message: "Bad Request" });

  foundCat.name = name;
  foundCat.age = age;
  foundCat.color = color;
  foundCat.breed = breed;
  foundCat.adopted = adopted;

  res.status(200).json(foundCat);
});

app.delete("/cats/:catId", (req, res) => {
  const foundCat = cats.find((cat) => cat.id === req.params.catId);
  if (!foundCat) res.status(404).json({ message: "Cat Not Found" });

  const catIndex = cats.findIndex((cat) => cat.id === req.params.catId);
  cats.splice(catIndex, 1);

  res.status(204).end();
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`);
});
