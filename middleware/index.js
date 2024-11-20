const findCat = require("./findCat");
const handleErrors = require("./handleErrors");
const rejectDemonCats = require("./rejectDemonCats");
const upload = require("./multer");
const validateRequest = require("./validateRequest");
const requireAuth = require("./requireAuth");
const currentUser = require("./currentUser");

module.exports = {
  findCat,
  handleErrors,
  rejectDemonCats,
  upload,
  validateRequest,
  requireAuth,
  currentUser,
};
