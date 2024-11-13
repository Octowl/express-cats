const express = require("express");
const {
  catList,
  catDetail,
  createCat,
  updateCat,
  deleteCat,
} = require("../controllers/cats.controllers");
const { rejectDemonCats, findCat } = require("../../middlewares");

const router = express.Router();

router.param("catSlug", findCat);

router.get("/", catList);
router.get("/:catSlug", catDetail);
router.post("/", rejectDemonCats, createCat);
router.put("/:catSlug", updateCat);
router.delete("/:catSlug", deleteCat);

module.exports = router;
