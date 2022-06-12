const fibonacci = function(n) {
    if (n < 1) return "OOPS";

    let x1 = 0;
    let x2 = 1;

    for (let i = 1; i < n; i++) {
        let temp = x2;
        x2 += x1;
        x1 = temp;
    }
    return x2;
};

// Do not edit below this line
module.exports = fibonacci;
