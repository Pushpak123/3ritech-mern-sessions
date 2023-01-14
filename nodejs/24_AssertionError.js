const assertError = require("assert");

function doAdd(a, b) {
  return a + b;
}
const expectedResult = doAdd(2, 5);
assertError(expectedResult === 3, "unknown result");
