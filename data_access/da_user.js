const sql = require("../helper/sql");
const logger = require("../helper/logger");

const get_user = async (request) => {
  try {
    const pool = await sql.get_pool();
    const {} = request.body;
    let response = await pool.request().input("").execute("");
    await pool.close();
    return response.recordset[0];
  } catch (error) {
    logger.log_error(error);
  }
};

module.exports = {
  get_user,
};
