const leapYears = function (year) {
  let isLap = false;
  if (year % 4 === 0) {
    isLap = true;
  }
  if (year % 100 === 0) {
    isLap = false;
    if (year % 400 == 0) {
        isLap = true;
    }
  }
  return isLap;
};

// Do not edit below this line
module.exports = leapYears;
