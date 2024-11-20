const jwt = require("jsonwebtoken");

const getBearerToken = function (req) {
  const authHeader = req.headers["authorization"];

  if (authHeader && authHeader.startsWith("Bearer "))
    return authHeader.split(" ")[1];

  return null;
};

const currentUser = function (req, res, next) {
  const token = getBearerToken(req);

  if (!token) return next();

  try {
    const payload = jwt.verify(token, process.env.JWT_KEY);
    req.user = payload;
  } catch (error) {
    next(error);
  }

  next();
};

module.exports = currentUser;
