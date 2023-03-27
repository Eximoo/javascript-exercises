const fibonacci = function (x) {
  if (x < 0) return `OOPS`;
  x = +x;
  if (x <= 2) return 1;
  let fibA = 1;
  let fibB = 1;
  let fib = 0;
  for (let i = 2; i < x; i++) {
    fib = fibA + fibB;
    fibA = fibB;
    fibB = fib;
  }
  return fib;
};
// Do not edit below this line
module.exports = fibonacci;
