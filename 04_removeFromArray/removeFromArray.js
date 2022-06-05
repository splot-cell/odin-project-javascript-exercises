const removeFromArray = function(array) {
    let index;
    for (let i = 1; i < arguments.length; i++) {
        index = array.findIndex((element) => (element === arguments[i]));       
        if (index >= 0) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
