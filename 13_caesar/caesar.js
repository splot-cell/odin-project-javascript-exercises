function isLetter(char) {
    return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}

const caesar = function(string, shift) {
    let coded = "";
    for (let i = 0; i < string.length; i++) {
        if (isLetter(string.charAt(i))) {
            coded += String.fromCharCode(string.charCodeAt(i) + shift);
        } else {
            coded += string.charAt(i);
        }
    }
    return coded;
};

// Do not edit below this line
module.exports = caesar;
