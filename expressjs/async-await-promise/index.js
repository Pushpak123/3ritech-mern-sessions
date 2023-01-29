const fs = require("fs");

// using with Async and Await
const readFileAsyncAwait = async (filePath, encoding) => {
  await fs.readFile(filePath, encoding, (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });
};
readFileAsyncAwait("inputFile.txt", "utf-8");

const readFilePromise = (filePath, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};
console.log(readFilePromise("inutFile.txt", "utf-8"));
