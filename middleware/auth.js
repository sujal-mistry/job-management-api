const jwt = require("jsonwebtoken");

const config = require("config");

const verifyToken = (req, res, next) => {
  let token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.headers["authorization"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }
    const decoded = jwt.verify(token, config.get("secret"));
    req.user_id = decoded.user_id;
  } catch (err) {
    console.log(err);
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
