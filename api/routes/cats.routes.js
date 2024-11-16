const express = require("express");
const { body } = require("express-validator");

const {
  catList,
  catDetail,
  createCat,
  updateCat,
  deleteCat,
} = require("../controllers/cats.controllers");
const {
  findCat,
  rejectDemonCats,
  upload,
  validateRequest,
} = require("../../middleware");

const router = express.Router();

router.param("catSlug", findCat);

router.get("/", catList);
router.get("/:catSlug", catDetail);

router.post(
  "/",
  upload.single("image"),
  rejectDemonCats,
  [
    body("name").not().isEmpty().withMessage("Name is required"),
    body("age")
      .isInt({ gt: -1 })
      .withMessage("Age must be a number greater than or equal to 0"),
  ],
  validateRequest,
  createCat
);

router.put(
  "/:catSlug",
  upload.single("image"),
  [
    body("name").not().isEmpty().withMessage("Name is required"),
    body("age")
      .isInt({ gt: -1 })
      .withMessage("Age must be a number greater than or equal to 0"),
  ],
  validateRequest,
  updateCat
);

router.delete("/:catSlug", deleteCat);

module.exports = router;
