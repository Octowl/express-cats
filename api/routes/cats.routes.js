const express = require("express");
const multer = require("multer");

const {
  catList,
  catDetail,
  createCat,
  updateCat,
  deleteCat,
} = require("../controllers/cats.controllers");
const { rejectDemonCats, findCat } = require("../../middlewares");

const storage = multer.diskStorage({
  destination: "./media",
  filename: (req, file, cb) => {
    cb(null, `${+new Date()}${file.originalname}`);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.param("catSlug", findCat);

router.get("/", catList);
router.get("/:catSlug", catDetail);
router.post("/", upload.single("image"), rejectDemonCats, createCat);
router.put("/:catSlug", upload.single("image"), updateCat);
router.delete("/:catSlug", deleteCat);

module.exports = router;
