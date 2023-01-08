var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("input_data1.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input_data1.zip"));
