const { NotAuthorizedError } = require("../errors");

const requireAuth = function (req, res, next) {
  if (!req.user) throw NotAuthorizedError();

  next();
};

module.exports = requireAuth;
