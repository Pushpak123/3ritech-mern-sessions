let rect = require("./rectangle");
module.exports.Rect = function Rect(l, b) {
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log(`there is an error: ${err.message}`);
    } else {
      console.log(
        `area of rectangle with dimensions length: ${l}, breadth: ${b}, and rectangle: ${rectangle.Area()}`
      );
      console.log(
        `perimeter of rectangle with dimensions length: ${l}, breadth: ${b}, and rectangle: ${rectangle.Perimeter()}`
      );
    }
  });
};
