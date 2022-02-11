const router = require("express").Router();

const auth = require("../middleware/auth");

// import music controller
const controller = require("../controllers/music.controller");

// parse requests to music controller

// add new music
router.post("/add", auth, controller.add);

// update music by id
router.put("/update", auth, controller.update);

// delete music by id
router.put("/delete", auth, controller.delete);

// get all musics
router.get("/all", controller.getMusics);

module.exports = router;
