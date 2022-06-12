function isLetter(char) {
    return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}

function getCodeSet(charCode) {
    return charCode < 91 ? 65 : 97;
}

function modulo(a, n) {
    return ((a % n ) + n ) % n;
}

function wrapShift(charCode, shift) {
    // CAPS: 65 - 90
    // lower: 97 - 122
    return modulo(charCode - getCodeSet(charCode) + shift, 26) + getCodeSet(charCode); 
}

const caesar = function(string, shift) {
    return string.split("")
                 .map(letter => isLetter(letter) ? String.fromCharCode(wrapShift(letter.charCodeAt(), shift)) : letter)
                 .join("");
};

// Do not edit below this line
module.exports = caesar;
