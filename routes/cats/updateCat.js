const express = require("express");
const { body } = require("express-validator");

const { upload, validateRequest } = require("../../middleware");
const findCat = require("./findCat");

const router = express.Router();

router.param("catSlug", findCat);

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
  async (req, res) => {
    if (req.file) if (req.file) req.body.image = req.file.location;

    for (const key in req.body) req.cat[key] = req.body[key];

    req.cat.save();
    res.status(200).json(req.cat);
  }
);

module.exports = { updateCatRouter: router };
