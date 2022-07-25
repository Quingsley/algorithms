"use strict";
// Design a greedy algorithm that counts the number of substrings that start with a letter and end
// with a different letter. For example, there are four substrings in CABAAXBYA
// that start with an A and end with a B

const string = "CABAAXBYA";
const string2 = "xxxjerome";
const letter1 = "A";
const letter2 = "B";
const findNumOfSubstrings = function (string, l1, l2) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === l1) {
      for (let j = i + 1; j < string.length; j++) {
        if (string[j] === l2) {
          count++;
        }
      }
    }
  }
  return count;
};

console.log(findNumOfSubstrings(string, letter1, letter2));
