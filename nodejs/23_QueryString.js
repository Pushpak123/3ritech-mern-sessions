const queryString = require("querystring");

const res = queryString.parse(
  "hl=en&sa=X&ved=0ahUKEwiyztvzhcb8AhUQ-jgGHbEqAXEQPAgI"
);

console.log(res);

const res1 = queryString.stringify({
  hl: "en",
  sa: "X",
  ved: "0ahUKEwiyztvzhcb8AhUQ-jgGHbEqAXEQPAgI",
});

console.log(res1);
