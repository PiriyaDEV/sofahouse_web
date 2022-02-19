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
        url,
        category,
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

// get musics by category
exports.getMusicsByCategory = async (category) => {
  try {
    const [result, fields] = await sql.query(
      `SELECT
        m1.category,
        (
          SELECT
            JSON_ARRAYAGG(
              JSON_OBJECT(
                'id',
                m2.id,
                'title',
                m2.title,
                'artist',
                m2.artist,
                'url',
                m2.url,
                'category',
                m2.category,
                'created_at',
                m2.created_at
              )
            )
          FROM
            musics m2
          WHERE
            m2.status = 1
            AND m2.category = m1.category
        ) AS musics
      FROM
        musics m1
      GROUP BY
        m1.category`
    );

    logger.info(`Selected ${result.length} music(s)`);
    return result;
  } catch (error) {
    // if query error
    logger.error(error);
    throw new Error("Unexpected error");
  }
};
