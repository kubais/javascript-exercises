const add = function(x, y) {
	return y += x;
};

const subtract = function(x, y) {
	return y = x - y;
};

const sum = function(arr) {
	return arr.reduce((a, b) => a + b, 0);
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a * b);
};

const power = function(x,n) {
	return x = (x ** n);
};

const factorial = function(num) {
	if (num === 0) return 1;
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
  
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
