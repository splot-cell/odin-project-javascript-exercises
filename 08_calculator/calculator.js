const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let retVal = 1;
  for (let i = 0; i < arr.length; i++) {
    retVal *= arr[i];
  }
  return retVal;
};

const power = function(a, b) {
	let retVal = 1;
  for (let i = 0; i < b; i++) {
    retVal *= a;
  }
  return retVal;
};

const factorial = function(a) {
  let retVal = 1;
	for (i = a; i > 0; i--) {
    retVal *= i;
  }
  return retVal;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
