var fs = require("fs");
var data = `
this is a data writing into a this file
`;

var writerStream = fs.createWriteStream("newfileData.txt");
writerStream.write(data, "utf-8");
writerStream.end();

writerStream.on("finish", function () {
  console.log("write completed");
});

writerStream.on("error", function (err) {
  console.log(err);
});

console.log("writing the data process!!");
