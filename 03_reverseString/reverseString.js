const reverseString = function(string) {
    let retVal = '';
    for(let i = string.length; i >= 0; i--) {
        retVal += string.charAt(i);
    }
    return retVal;
};

// Do not edit below this line
module.exports = reverseString;
