const sumAll = function (a, b) {
    if(a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    if(a<0 || b<0) {
        return 'ERROR'
    }
    if(typeof a != 'number' ||  typeof b != 'number') {
        return `ERROR`
    }
  let sum = 0;
  for (a; a <= b; a++) {
    sum += a;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
