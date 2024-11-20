const express = require("express");
const findCat = require("./findCat");

const router = express.Router();

router.param("catSlug", findCat);

router.get("/:catSlug", async (req, res) => {
  res.status(200).json(req.cat);
});

module.exports = { getCatRouter: router };
