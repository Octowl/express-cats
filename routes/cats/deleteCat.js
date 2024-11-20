const express = require("express");
const findCat = require("./findCat");

const router = express.Router();

router.param("catSlug", findCat);

router.delete("/:catSlug", async (req, res) => {
  await req.cat.deleteOne();
  res.status(204).end();
});

module.exports = { deleteCatRouter: router };
