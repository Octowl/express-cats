const express = require("express");
const { catList, catDetail, createCat, updateCat, deleteCat } =
  require("../controllers/cats.controllers").default;
const { rejectDemonCats, findCat } = require("../../middlewares");

const router = express.Router();

router.param("catId", findCat);

router.get("/", catList);
router.get("/:catId", catDetail);
router.post("/", rejectDemonCats, createCat);
router.put("/:catId", updateCat);
router.delete("/:catId", deleteCat);

module.exports = router;
