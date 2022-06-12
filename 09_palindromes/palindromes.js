function filterToLetters(string) {
    let retVal = "";
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) >= "a" && string.charAt(i) <= "z" ) {
            retVal += string.charAt(i);
        }
    }
    return retVal;
}

const palindromes = function (string) {
    // remove caps
    // remove spaces
    // remove punc
    let filteredString = filterToLetters(string.toLowerCase());

    // loop from front and back, checking each char
    for (let i = 0; i < filteredString.length; i++) {
        if (filteredString.charAt(i) !== filteredString.charAt(filteredString.length - 1 - i)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
