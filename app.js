const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/views/index.html");
});

app.get("/admin", (req, res) => {
  res.redirect("/admin/register");
});

app.get("/admin/login", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/views/admin-login.html");
});

app.get("/admin/register", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/views/admin-register.html");
});

app.get("/admin/pages/home", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/views/index.html");
});

app.get("/admin/pages/blog", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/views/blog.html");
});

app.get("/admin/pages/postcards", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/views/postcards.html");
});

app.get("/admin/pages/prints", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/views/prints.html");
});

app.listen(process.env.PORT || 8080);
