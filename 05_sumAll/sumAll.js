const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) ||
            num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    posDifference = (num1 - num2) > -1 ? (num1 - num2) : (num2 - num1);
    return ((posDifference) + 1) * ((num1 + num2) / 2);
};

// Do not edit below this line
module.exports = sumAll;
