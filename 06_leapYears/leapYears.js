const leapYears = function(date) {
    if (date % 4 == 0 && (date % 400 == 0 || date % 100 != 0)) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
