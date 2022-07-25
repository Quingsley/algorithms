"use strict";
const bubbleSort = function (array) {
  for (let i = 0; i < array.length; i++) {
    let swap = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) break;
  }
  return array;
};

let myArray = [7, 1, 5, 4, 9, 2, 3, 10, 8, 6];
console.log(bubbleSort(myArray));
