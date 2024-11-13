const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const host = "localhost";
const port = 3030;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ info: "API is running on port: " + port });
});

app.listen(port, host, () => {
  console.log(`Server is running on ${host}: ${port}`);
});

const user = require("./router/user");

app.use("", user);
