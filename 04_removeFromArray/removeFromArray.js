const removeFromArray = function (arr, pop) {
  for (let j = 1; j < arguments.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arguments[j]) {
        // console.log(`i = ${i}`)
        // console.log(`arr.indexOf(i) i ${arr.indexOf(i)}`)
        arr.splice(i, 1);
      }
    }
  }

  return arr;
};
// console.log(removeFromArray([1,2,3,4],3))
// Do not edit below this line
module.exports = removeFromArray;
