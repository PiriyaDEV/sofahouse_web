const sql = require("../database/connection");
const logger = require("../../lib/logger/index");

// add new music
exports.create = async (music) => {
  music.status = true;
  music.created_at = Date.now();
  music.updated_at = Date.now();

  try {
    const [result, fields] = await sql.query(`INSERT INTO musics SET ?`, music);

    logger.info(
      `Inserted ${result.affectedRows} music >>> id: ${result.insertId}`
    );
    return { id: result.insertId, ...music };
  } catch (error) {
    // if query error
    logger.error(error);
    throw new Error("Unexpected error");
  }
};

// update music by id
exports.update = async (music) => {
  music.updated_at = Date.now();

  try {
    const [result, fields] = await sql.query(
      `UPDATE musics SET ? WHERE id = ${music.id}`,
      music
    );

    logger.info(`Updated music >>> id: ${music.id}`);
  } catch (error) {
    // if query error
    logger.error(error);
    throw new Error("Unexpected error");
  }
};

// get all musics
exports.getMusics = async () => {
  try {
    const [result, fields] = await sql.query(
      `SELECT
        id,
        title,
        artist,
        duration,
        cover_url,
        music_url,
        cat_lyrics_song,
        cat_music_prod,
        cat_vocal_rec,
        cat_music_score,
        cat_mix_master,
        show_homepage,
        created_at
      FROM
        musics
      WHERE
        status = 1`
    );

    logger.info(`Selected ${result.length} music(s)`);
    return result;
  } catch (error) {
    // if query error
    logger.error(error);
    throw new Error("Unexpected error");
  }
};

