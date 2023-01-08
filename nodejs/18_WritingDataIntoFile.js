var fs = require("fs");
var data = `
working with writing data into a file
`;

fs.writeFile("writeData1.txt", data, function (err, success) {
  if (err) throw err;
  console.log("writing data into the file process!!");
});
