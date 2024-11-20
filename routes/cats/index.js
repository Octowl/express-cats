const express = require("express");

const findCat = require("./findCat");
const { getCatsRouter } = require("./getCats");
const { getCatRouter } = require("./getCat");
const { createCatRouter } = require("./createCat");
const { updateCatRouter } = require("./updateCat");
const { deleteCatRouter } = require("./deleteCat");

const router = express.Router();

router.use(getCatsRouter);
router.use(getCatRouter);
router.use(createCatRouter);
router.use(updateCatRouter);
router.use(deleteCatRouter);

module.exports = { catsRouter: router };
