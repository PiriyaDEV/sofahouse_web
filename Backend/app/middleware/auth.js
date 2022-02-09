const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth.config");

// verify access token
const verifyToken = (req, res, next) => {
  let token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  try {
    // access token not found
    if (!token) throw new Error("Required access token");

    // verify jwt
    jwt.verify(token, authConfig.secretKey);
  } catch (err) {
    // failed, unauthorized
    return res.status(403).json({
      success: false,
      message: "Unauthorized",
    });
  }

  next();
};

module.exports = verifyToken;
