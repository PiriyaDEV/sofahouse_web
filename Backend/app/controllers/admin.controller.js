const bcrypt = require("bcryptjs");

const Admin = require("../models/admin.model");

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
    const result = await Admin.find(admin);

    // check authentication
    if (
      !result.isFound ||
      !bcrypt.compareSync(admin.password, result.password)
    ) {
      // unauthenticated
      return res.status(403).json({
        success: false,
        message: "Unauthenticated",
      });
    }

    // update last login time
    admin.last_login = Date.now();
    await Admin.update(admin);

    // response the result
    return res.status(200).json({
      success: true,
      message: "Logged-in successfully",
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
