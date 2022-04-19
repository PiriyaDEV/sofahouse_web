const Music = require("../models/music.model");

// clear its priority if the category doesn't exist
const clearCategoryPriority = (musicData) => {
  let music = musicData;

  if (music.hasOwnProperty("cat_lyrics_song") && !music.cat_lyrics_song) {
    music.pri_lyrics_song = 0;
  }
  if (music.hasOwnProperty("cat_music_prod") && !music.cat_music_prod) {
    music.pri_music_prod = 0;
  }
  if (music.hasOwnProperty("cat_vocal_rec") && !music.cat_vocal_rec) {
    music.pri_vocal_rec = 0;
  }
  if (music.hasOwnProperty("cat_music_score") && !music.cat_music_score) {
    music.pri_music_score = 0;
  }
  if (music.hasOwnProperty("cat_mix_master") && !music.cat_mix_master) {
    music.pri_mix_master = 0;
  }
  if (music.hasOwnProperty("show_homepage") && !music.show_homepage) {
    music.pri_homepage = 0;
  }

  return music;
};

// add new music
exports.add = async (req, res) => {
  if (!req.body.hasOwnProperty("music")) {
    // failed, information not found
    return res.status(200).json({
      success: false,
      message: "Required information",
    });
  }

  let music = req.body.music;

  // check all information exists
  if (
    !music.hasOwnProperty("title") ||
    !music.hasOwnProperty("artist") ||
    !music.hasOwnProperty("duration") ||
    !music.hasOwnProperty("cover_url") ||
    !music.hasOwnProperty("music_url") ||
    !music.hasOwnProperty("cat_lyrics_song") ||
    !music.hasOwnProperty("cat_music_prod") ||
    !music.hasOwnProperty("cat_vocal_rec") ||
    !music.hasOwnProperty("cat_music_score") ||
    !music.hasOwnProperty("cat_mix_master") ||
    !music.hasOwnProperty("show_homepage") ||
    !music.hasOwnProperty("pri_lyrics_song") ||
    !music.hasOwnProperty("pri_music_prod") ||
    !music.hasOwnProperty("pri_vocal_rec") ||
    !music.hasOwnProperty("pri_music_score") ||
    !music.hasOwnProperty("pri_mix_master") ||
    !music.hasOwnProperty("pri_homepage")
  ) {
    // failed, information not found
    return res.status(200).json({
      success: false,
      message: "Required information",
    });
  }

  // clear category's priority
  music = clearCategoryPriority(music);

  try {
    // add new music
    const result = await Music.create(music);

    // response the result
    return res.status(201).json({
      success: true,
      message: "Added new music successfully",
      id: result.id,
    });
  } catch (error) {
    // return if error
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// update music by id
exports.update = async (req, res) => {
  if (!req.body.hasOwnProperty("music")) {
    // failed, information not found
    return res.status(200).json({
      success: false,
      message: "Required information",
    });
  }

  let music = req.body.music;

  // check music id exists
  if (!music.hasOwnProperty("id")) {
    // failed, information not found
    return res.status(200).json({
      success: false,
      message: "Required music id",
    });
  }

  // avoid directly update music status
  if (music.hasOwnProperty("status")) {
    delete music.status;
  }

  // clear category's priority
  music = clearCategoryPriority(music);

  try {
    // update music
    await Music.update(music);

    // response the result
    return res.status(200).json({
      success: true,
      message: "Updated music successfully",
      id: music.id,
    });
  } catch (error) {
    // return if error
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// delete music by id
exports.delete = async (req, res) => {
  if (!req.body.hasOwnProperty("music")) {
    // failed, information not found
    return res.status(200).json({
      success: false,
      message: "Required information",
    });
  }

  const music = req.body.music;

  // check music id exists
  if (!music.hasOwnProperty("id")) {
    // failed, information not found
    return res.status(200).json({
      success: false,
      message: "Required music id",
    });
  }

  // set deleted status and clear category's priority
  music.status = false;
  music.pri_lyrics_song = 0;
  music.pri_music_prod = 0;
  music.pri_vocal_rec = 0;
  music.pri_music_score = 0;
  music.pri_mix_master = 0;
  music.pri_homepage = 0;

  try {
    // update status
    await Music.update(music);

    // response the result
    return res.status(200).json({
      success: true,
      message: "Deleted music successfully",
      id: music.id,
    });
  } catch (error) {
    // return if error
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get all musics
exports.getMusics = async (req, res) => {
  try {
    // get data
    const result = await Music.getMusics();

    // response the result
    return res.status(200).json(result);
  } catch (error) {
    // return if error
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
