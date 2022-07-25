"use strict";
//To fix
class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

const countLevels = function (node) {
  let levels = 0;
  if (node === null) return levels;
  if (node.left === null && node.right === null) {
    levels = 1;
  } else {
  }

  return levels;
};
