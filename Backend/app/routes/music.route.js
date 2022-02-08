const router = require("express").Router();

// import music controller
const controller = require("../controllers/music.controller");

// parse requests to music controller

// add new music
router.post("/add", controller.add);

// update music by id
router.put("/update", controller.update);

// delete music by id
router.put("/delete", controller.delete);

// get all musics
router.get("/all-musics", controller.getMusics);

module.exports = router;