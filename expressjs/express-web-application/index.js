var express = require("express");
var app = express();

var path = require("path");
var options = {
  root: path.join(__dirname, "/"),
};

var http = require("http");

var nStatic = require("node-static");

// setting static middleware
app.use(express.static("public"));

// serves all the request which includes /images
app.use("/images", express.static(__dirname + "/images"));

// setting virtual path
app.use("/resources", express.static(__dirname + "/images"));

// define a route
app.get("/", function (req, res) {
  res.sendFile("index.html", options);
});

var server = app.listen(5000, function () {
  console.log("express web application is running!");
});
