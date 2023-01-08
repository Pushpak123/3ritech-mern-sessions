var fs = require("fs");
var myData = `
    adding / appending the existing data
`;
fs.open("newfileData.txt", "a+", function (err, openFile) {
  if (err) throw err;
  fs.appendFile("newfileData.txt", myData, function (err, success) {
    if (err) throw err;
    console.log("appending the data into the existing data");
  });
});
