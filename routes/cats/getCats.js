const express = require("express");

const Cat = require("../../models/Cat");

const router = express.Router();

router.get("/", async (req, res) => {
  const { name } = req.query;

  const cats = await Cat.find(
    { name: { $regex: name ?? "", $options: "i" } },
    "-__v"
  );
  res.status(200).json(cats);
});

module.exports = { getCatsRouter: router };
