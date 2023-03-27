const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = function (arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};

const multiply = function (arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum *= arr[i];
  }
  return sum;
};

const power = (a, b) => a ** b;

const factorial = function (a) {
  if (a === 0 || a === 1) return 1;
  if (a === 2) return 2;
  let sum = 2;
  for (let i = 3; i <= a; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
