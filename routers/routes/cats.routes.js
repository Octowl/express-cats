const express = require("express");
const cats = require("../../data/cats");
const {
  catList,
  catDetail,
  createCat,
  updateCat,
  deleteCat,
} = require("../controllers/cats.controllers");

const router = express.Router();

router.get("/", catList);
router.get("/:catId", catDetail);
router.post("/", createCat);
router.put("/:catId", updateCat);
router.delete("/:catId", deleteCat);

module.exports = router;
