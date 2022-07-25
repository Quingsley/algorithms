"use strict";

// // To fix
let myArr = [5, 4, 3, 2, 1];

// let lowerBound = 0;
// let upperBound = myArr.length - 1;

// const mergeSort = function (arr, lowerBound, upperBound) {
//   if (lowerBound < upperBound) {
//     let midpoint = Math.trunc((lowerBound + upperBound) / 2);
//     mergeSort(arr, lowerBound, midpoint);
//     mergeSort(arr, midpoint + 1, upperBound);
//     mergeHalves(arr, lowerBound, midpoint, upperBound);
//     return arr;
//   }
// };

// const mergeHalves = function (arr, lowerBound, midpoint, upperBound) {
//   let leftStart = lowerBound;
//   let rightStart = midpoint + 1;
//   let tempArray = [];

//   while (leftStart <= midpoint && rightStart <= upperBound) {
//     if (arr[leftStart] <= arr[rightStart]) {
//       tempArray.push(arr[leftStart]);
//       leftStart++;
//     } else {
//       tempArray.push(arr[rightStart]);
//       rightStart++;
//     }
//   }

//   if (leftStart > midpoint) {
//     while (rightStart <= upperBound) {
//       tempArray.push(arr[rightStart]);
//       rightStart++;
//     }
//   } else {
//     while (leftStart <= midpoint) {
//       tempArray.push(arr[leftStart]);
//       leftStart++;
//     }
//   }

//   for (let i = lowerBound; i < tempArray.length; i++) {
//     arr[i] = tempArray[i];
//   }
// };

// const result = mergeSort(myArr, lowerBound, upperBound);
// console.log(result);

const mergeSort = function (array, low, high) {
  let midpoint = (low + high) / 2;
  let array1, array2;
  array1 = mergeSort(array, low, midpoint);
  array2 = mergeSort(array, midpoint + 1, high);
  let n1 = array.length / 2;
  let n2 = array.length / 2;
  let array3 = merge(array1, array2, n1, n2);
  return array3;
};

const sort = mergeSort(myArr, 0, myArr.length - 1);
console.log(sort);

let finalArray = [];
const merge = function (arr1, arr2, num1, num2) {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < num1 && j < num2) {
    if (arr1[i] < arr2[j]) {
      finalArray.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      finalArray.push(arr2[j]);
      j++;
    } else {
      finalArray.push(arr1[i]);
      i++;
      j++;
    }
  }
  if (i < n1) {
    while (i < n1) {
      finalArray.push(arr1[i++]);
    }
  } else if (j < n2) {
    while (j < n2) {
      finalArray.push(arr2[j++]);
    }
  }

  return finalArray;
};
