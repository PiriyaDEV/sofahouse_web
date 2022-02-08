const router = require("express").Router();

// import routes from each module
const musicRoutes = require("./music.route");

// parse requests to music routes
router.use("/music", musicRoutes);

module.exports = router;