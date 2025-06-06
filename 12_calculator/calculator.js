const add = function(num1, num2) {
	let add = num1 + num2;
  return add;
};

const subtract = function(num1,num2) {
	let sub = num1 - num2;
  return sub;
};

const sum = function(array) {
	let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

const multiply = function(array) {
  let mul = 1;

  for (let i = 0; i < array.length; i++) {
    mul *= array[i];
  }

  return mul;
};

const power = function(num1, num2) {
  let pow = Math.pow(num1,num2);
  return pow;
};

const factorial = function(num) {
	let fac = 1;

  for (let i = 1; i <= num; i++) {
    fac *= i;
  }
  return Number(fac);
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
