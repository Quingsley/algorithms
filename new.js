"use strict";
const testInput = function (arr, k) {
  if (arr.length <= 1) console.log("Invalid input");
  if (typeof k !== "number") {
    console.log("Invalid Input");
  }
  const valid = arr.every((el) => typeof el === "number");
  if (!valid) console.log("Invalid output");
};
const getSum = function (arr, k) {
  testInput(arr, k);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) return true;
    }
  }
  return false;
};

const res = getSum([10, 15, 3, 7], 17);
console.log(res);
