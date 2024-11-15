const express = require("express");

const {
  catList,
  catDetail,
  createCat,
  updateCat,
  deleteCat,
} = require("../controllers/cats.controllers");
const { findCat, rejectDemonCats, upload } = require("../../middleware");

const router = express.Router();

router.param("catSlug", findCat);

router.get("/", catList);
router.get("/:catSlug", catDetail);
router.post("/", upload.single("image"), rejectDemonCats, createCat);
router.put("/:catSlug", upload.single("image"), updateCat);
router.delete("/:catSlug", deleteCat);

module.exports = router;
