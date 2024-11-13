const da = require("../data_access/da_user");

const get_user = async (request, response) => {
  try {
    let data = await da.get_user(request);
    response.status(200).json(data);
  } catch (error) {
    logger.log_error(error);
    response.status(500).send(error);
  }
};

module.exports = {
  get_user,
};
