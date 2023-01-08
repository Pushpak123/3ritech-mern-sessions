var fs = require("fs");
fs.readFile("input_data.txt", function (err, data) {
  if (err) throw err;
  console.log(data.toString());
});
