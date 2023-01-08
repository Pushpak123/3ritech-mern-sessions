var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("input_data1.zip")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("new_input_data1.txt"));
