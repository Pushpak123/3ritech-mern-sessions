const mod = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b == 0) {
      reject("modulus with 0 is not allowed");
    } else {
      resolve(a % b);
    }
  });
};
async function __5mod0() {
  try {
    const res = await mod(4, 0);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
__5mod0();
