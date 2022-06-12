const fibonacci = function(n) {
    if (n < 1) return "OOPS";
    if (n < 3) return 1;

    let x1 = 0;
    let x2 = 1;
    let sum;

    for (let i = 1; i < n; i++) {
        sum = x1 + x2;
        x1 < x2 ? x1 = sum : x2 = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
