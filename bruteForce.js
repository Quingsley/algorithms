"use strict";

let bruteForce = function (mainString, pattern) {
  let lm = mainString.length;

  let p = pattern.length;

  for (let i = 0; i < lm - p; i++) {
    let j;
    for (j = 0; j < p; j++) {
      if (mainString[i + j] != pattern[j]) {
        break;
      }
    }
    if (j === p) return i;
  }

  return mainString;
};

const match = bruteForce("qwwertyugiohjerm", "yugi");
console.log(match);

// lcm using bruteforce
let x = +prompt("Find LCM of two numbers \n Enter num1: ");
let y = +prompt("Enter num2: ");
const lcm = function (a, b) {
  let LCM;
  let flag = true;
  if (a === 0 || b === 0) {
    LCM = 0;
    flag = false;
  }
  if (a < b) {
    let temp = a;
    a = b;
    b = temp;
  }

  for (let i = a; flag === true && i < Number.MAX_SAFE_INTEGER; i++) {
    if (i % a === 0 && i % b === 0) {
      LCM = i;
      flag = false;
    }
  }
  return LCM;
};

const getLcm = lcm(x, y);
console.log(getLcm);

// prime numbers using bruteforce
const checkPrime = function (num) {
  let flag = true;
  if (num < 2) flag = false;
  for (let i = 2; i < num && flag === true; i++) flag = num % i !== 0;

  return flag;
};

let num = +prompt("Enter a number\nto check if it is prime: ");
let res = checkPrime(num);
console.log(res);
