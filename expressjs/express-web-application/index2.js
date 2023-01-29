var express = require("express");
var app = express();

var path = require("path");
var options = {
  root: path.join(__dirname, "/"),
};

// define a route
app.get("/", function (req, res) {
  res.sendFile("index.html", options);
});

app.get("/about-us", function (req, res) {
  res.sendFile("about-us.html", options);
});

var server = app.listen(5000, function () {
  console.log("express web application is running!");
});
