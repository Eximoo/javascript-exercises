const repeatString = function (inputString, reps) {
  let stringToReturn = "";
  if (reps < 0) {
    return 'ERROR';
  }
  for (let i = 0; i < reps; i++) {
    stringToReturn += inputString;
  }
  return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;
