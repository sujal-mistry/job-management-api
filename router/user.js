const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const { get_user } = require("../controller/user_controller");

router.route("/get-user").post(get_user);

module.exports = router;
