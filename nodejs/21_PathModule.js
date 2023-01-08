var path = require("path");

console.log(`normalize with / : ${path.normalize("/")}`);

console.log(`normalize with /.. : ${path.normalize("/..")}`);

console.log(`normalize with /../.. : ${path.normalize("/../..")}`);

console.log(`joinPath: ${path.join("/", "node", "files")}`);

console.log(`direname: ${path.dirname("nodejs-concepts")}`);

console.log(`basename: ${path.basename("nodejs-concepts")}`);

console.log(`extname: ${path.extname("fileInfo.txt")}`);
