var fs = require("fs");

var readerStream = fs.createReadStream("newfileData.txt");

var writerStream = fs.createWriteStream("pipingData.txt");

readerStream.pipe(writerStream);

console.log("the concept of piping streams are process!!");
