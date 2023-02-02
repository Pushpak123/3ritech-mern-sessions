const express = require("express");
const bodyParser = require("body-parser");
const { emit } = require("nodemon");

const app = express();

const users = [
  { userId: 1, userName: "awani", userEmail: "awani@gmail.com", userAge: 23 },
  { userId: 2, userName: "john", userEmail: "john@gmail.com", userAge: 27 },
  { userId: 3, userName: "paul", userEmail: "paul@gmail.com", userAge: 26 },
  { userId: 4, userName: "steve", userEmail: "steve@gmail.com", userAge: 24 },
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", {
    data: users,
  });
});

app.post("/delete", (req, res) => {
  var userId = req.body.userId;
  var j = 0;
  users.forEach((user) => {
    j = j + 1;
    if (user.userId == userId) {
      users.splice(j - 1, 1);
    }
  });

  res.render("home", {
    data: users,
  });
});

app.post("/", (req, res) => {
  var userId = req.body.userId;
  var userName = req.body.userName;
  var userEmail = req.body.userEmail;
  var userAge = req.body.userAge;

  users.push({
    userId: userId,
    userName: userName,
    userEmail: userEmail,
    userAge: userAge,
  });

  res.render("home", {
    data: users,
  });
});

app.post("/update", (req, res) => {
  var userId = req.body.userId;
  var userName = req.body.userName;
  var userEmail = req.body.userEmail;
  var userAge = req.body.userAge;

  var j = 0;
  users.forEach((user) => {
    j = j + 1;
    if (user.userId == userId) {
      user.userName = userName;
      user.userEmail = userEmail;
      user.userAge = userAge;
    }
  });

  res.render("home", {
    data: users,
  });
});

app.listen(3000);
