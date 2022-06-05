const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let retVal = '';
    for (let i = 0; i < num; i++) {
        retVal += string;
    }
    return retVal;
};

// Do not edit below this line
module.exports = repeatString;
