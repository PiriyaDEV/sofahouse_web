const sql = require("../database/connection");
const logger = require("../../lib/logger/index");

// add new admin
exports.create = async (admin) => {
  admin.status = true;
  admin.last_login = Date.now();
  admin.created_at = Date.now();
  admin.updated_at = Date.now();

  try {
    const [result, fields] = await sql.query(`INSERT INTO admins SET ?`, admin);

    logger.info(
      `Inserted ${result.affectedRows} admin >>> id: ${result.insertId}`
    );
    return { id: result.insertId, ...admin };
  } catch (error) {
    // if query error
    logger.error(error);
    throw new Error("Unexpected error");
  }
};

// update admin by id
exports.update = async (admin) => {
  admin.updated_at = Date.now();

  try {
    const [result, fields] = await sql.query(
      `UPDATE admins SET ? WHERE id = ${admin.id}`,
      admin
    );

    logger.info(`Updated admin >>> id: ${admin.id}`);
  } catch (error) {
    // if query error
    logger.error(error);
    throw new Error("Unexpected error");
  }
};

// find admin by username
exports.findByUsername = async (admin) => {
  try {
    const [result, fields] = await sql.query(
      `SELECT
        id,
        username,
        password,
        last_login
      FROM
        admins
      WHERE
        username = '${admin.username}'
        AND status = 1`
    );

    // found
    if (result.length) {
      logger.info(`Found admin >>> id: ${result[0].id}`);
      return { isFound: true, ...result[0] };
    }
    // not found
    else {
      logger.info(`Not found admin >>> id: ${admin.username}`);
      return { isFound: false };
    }
  } catch (error) {
    // if query error
    logger.error(error);
    throw new Error("Unexpected error");
  }
};
