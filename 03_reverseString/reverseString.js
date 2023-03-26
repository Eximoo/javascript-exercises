const reverseString = function(inputStr) {
    let output = inputStr.slice(-1);
    for(let i = -1; i > (inputStr.length * -1); i--) {
        output += inputStr.slice(i-1,i);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
