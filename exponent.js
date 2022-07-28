"use strict";
const exponent = function (num, power) {
  if (power === 0) {
    return 1;
  }
  let x = exponent(num, Math.floor(power / 2));
  if (power % 2 === 0) {
    return x * x;
  } else {
    return num * x * x;
  }
};

console.log(exponent(3, 6));
