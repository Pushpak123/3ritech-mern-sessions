var fs = require("fs");
fs.stat("NodeJs_Notes.txt", function (err, stats) {
  if (err) throw err;
  var myData = `
        isDirectory: ${stats.isDirectory()} \n 
        isFile: ${stats.isFile()} \n 
        FileSize: ${stats.size} \n 
        CreatedTime: ${stats.atime}
    `;
  fs.open("fileInfo.txt", "w", function (err, done) {
    if (err) throw err;
    fs.writeFile("fileInfo.txt", myData, function (err, success) {
      if (err) throw err;
    });
  });
});
