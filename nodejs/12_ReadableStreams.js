let fs = require("fs");
let data = "";

var readerStream = fs.createReadStream("input_data1.txt");
readerStream.setEncoding("utf-8");

readerStream.on("data", function (chunck) {
  data += chunck;
});

readerStream.on("end", function () {
  console.log(data);
});

readerStream.on("error", function (err) {
  console.log(err);
});

console.log("reading the data process!!");
