const express = require("express");
const { body } = require("express-validator");

const Cat = require("../../models/Cat");
const {
  upload,
  rejectDemonCats,
  validateRequest,
} = require("../../middleware");

const router = express.Router();

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
  async (req, res) => {
    if (req.file) req.body.image = req.file.location;
    const newCat = await Cat.create(req.body);
    res.status(201).json(newCat);
  }
);

module.exports = { createCatRouter: router };
