const log4js = require("log4js");

log4js.configure({
  appenders: { error_log: { type: "file", filename: "error_log.log" } },
  categories: { default: { appenders: ["error_log"], level: "error" } },
});

const logger = log4js.getLogger("error_log");

async function log_error(error) {
  try {
    logger.error(error);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  log_error,
};
