const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Admin = require("../models/admin.model");
const authConfig = require("../config/auth.config");

// register new admin account
exports.register = async (req, res) => {
  const admin = req.body;

  // check all information exists
  if (!admin.hasOwnProperty("username") || !admin.hasOwnProperty("password")) {
    // failed, information not found
    return res.status(200).json({
      success: false,
      message: "Required username and password",
    });
  }

  // hash a password
  const salt = bcrypt.genSaltSync(10);
  admin.password = bcrypt.hashSync(admin.password, salt);

  try {
    // add admin account
    const result = await Admin.create(admin);

    // response the result
    return res.status(201).json({
      success: true,
      message: "Registered new admin successfully",
      id: result.id,
      username: result.username,
    });
  } catch (error) {
    // return if error
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// login authentication
exports.login = async (req, res) => {
  const admin = req.body;

  // check all information exists
  if (!admin.hasOwnProperty("username") || !admin.hasOwnProperty("password")) {
    // failed, information not found
    return res.status(200).json({
      success: false,
      message: "Required username and password",
    });
  }

  try {
    // find admin
    const result = await Admin.findByUsername(admin);

    // check authentication
    if (
      !result.isFound ||
      !bcrypt.compareSync(admin.password, result.password)
    ) {
      // unauthenticated
      return res.status(401).json({
        success: false,
        message: "Unauthenticated",
      });
    }

    // update last login time
    const updateAdmin = {
      id: result.id,
      last_login: Date.now(),
    };
    await Admin.update(updateAdmin);

    // generate access token
    const token = jwt.sign(
      {
        id: result.id,
        username: result.username,
      },
      authConfig.secretKey,
      { expiresIn: "12h" }
    );

    // response the result
    return res.status(200).json({
      success: true,
      message: "Logged-in successfully",
      id: result.id,
      username: result.username,
      token: token,
    });
  } catch (error) {
    // return if error
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
