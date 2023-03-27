const palindromes = function (str) {
    let newString = str.toLowerCase().replace(/[^A-Z0-9]+/ig, "")
    // console.log(newString);
    let halfSize = Math.floor(newString.length)
    if (newString[0] != newString.slice(-1)) return false;
    for(i = 1; i< halfSize; i++) {
        if(newString[i] != newString.slice((i*-1) -1,(i*-1))) {
            // console.log(newString[i]);
            // console.log(newString.slice((i*-1) -1,(i*-1)));
            // console.log(`fail i${i}`);
            return false
        }
    }
    return true;
};
palindromes("Racecar!");
// Do not edit below this line
module.exports = palindromes;
