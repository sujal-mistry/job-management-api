const config = require("config");
const mssql = require("mssql");

async function get_pool() {
  try {
    // let sql_password = await sec.decrypt_data(
    //   config.get("sqldatabase.password")
    // );
    let mssql_config = {
      user: config.get("sqldatabase.user"),
      password: config.get("sqldatabase.password"),
      server: config.get("sqldatabase.server"),
      port: config.get("sqldatabase.port"),
      database: config.get("sqldatabase.database"),
      synchronize: true,
      trustServerCertificate: true,
      pooling: false,
    };
    const pool = new mssql.ConnectionPool(mssql_config);
    await pool.connect();
    return pool;
  } catch (error) {
    console.log();
    error;
  }
}

module.exports = {
  get_pool,
};
