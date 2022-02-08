const router = require("express").Router();

// import routes from each module
const adminRoutes = require("./admin.route");
const musicRoutes = require("./music.route");

// parse requests to admin routes
router.use("/admin", adminRoutes);

// parse requests to music routes
router.use("/music", musicRoutes);

module.exports = router;
