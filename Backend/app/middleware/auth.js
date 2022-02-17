const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth.config");

// verify access token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // access token not found
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  try {
    // verify jwt
    jwt.verify(token, authConfig.secretKey);
  } catch (err) {
    // failed, unauthorized
    return res.status(403).json({
      success: false,
      message: "Forbidden",
    });
  }

  return next();
};

module.exports = verifyToken;
