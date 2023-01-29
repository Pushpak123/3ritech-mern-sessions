const express = require("express");
const app = express();

app.use(express.json());

const data = [
  { name: "john", email: "john@gmail.com" },
  { name: "david", email: "david@gmail.com" },
  { name: "paul", email: "paul@gmail.com" },
  { name: "steve", email: "steve@gmail.com" },
];

app.get("/", function (req, res) {
  res.json(data);
});

app.listen(3000, function () {
  console.log(`the app is running at 3000 port`);
});
