const router = require("express").Router();

// import admin controller
const controller = require("../controllers/admin.controller");

// parse requests to admin controller

// register admin account
router.post("/register", controller.register);

// login admin
router.post("/login", controller.login);

module.exports = router;