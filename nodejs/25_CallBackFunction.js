const fileSystem = require("fs");

const data = fileSystem.readFileSync("newfileData.txt");
console.log(data.toString());

fileSystem.readFile("newfileData.txt", function (err, buffer) {
  if (err) throw err;
  console.log(buffer.toString());
});
