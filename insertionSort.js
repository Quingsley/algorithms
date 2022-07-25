"use strict";
const myArray = [7, 1, 5, 4, 9, 2, 3, 10, 8, 6];
const insertionSort = function (array) {
  let i = 1;
  while (i < array.length) {
    let currValue = array[i];
    let hole = i;
    while (currValue < array[hole - 1] && hole >= 0) {
      array[hole] = array[hole - 1];
      hole--;
    }
    array[hole] = currValue;
    i++;
  }
  return array;
};

const result = insertionSort(myArray);
console.log(result);
