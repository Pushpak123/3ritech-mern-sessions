module.exports = (length, breadth, callback) => {
  if (length <= 0 || breadth <= 0) {
    setTimeout(
      () =>
        callback(
          new Error(
            `dimensions cannot be either zero or negative: length value: ${length}, and breadth value: ${breadth}`
          )
        ),
      3000
    );
  } else {
    setTimeout(
      () =>
        callback(null, {
          Perimeter: () => 2 * (length + breadth),
          Area: () => length * breadth,
        }),
      3000
    );
  }
};
