const palindromes = function (string) {
    // remove caps
    string.toLowerCase();
    // remove spaces
    // remove punc
    // loop from front and back, checking each char
    for(let i = 0; i < string.length; i++) {
        if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
