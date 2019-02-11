const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/views/index.html");
});

app.get("/prints", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/views/prints.html");
});

app.listen(process.env.PORT || 8080);
