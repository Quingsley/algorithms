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
  let numOfLevels;
  if (node === null) {
    numOfLevels = 0;
  } else {
    let left = countLevels(node.left);
    let right = countLevels(node.right);
    numOfLevels = left > right ? left + 1 : right + 1;
  }

  return numOfLevels;
};

function newNode(data) {
  let node = new Node(data);
  return node;
}

/*create a tree*/
let root = newNode(4);
root.left = newNode(3);
root.right = newNode(11);
root.left.right = newNode(5);
root.left.right.left = newNode(9);
root.left.right.left.right = newNode(10);
root.left.right.left.right.left = newNode(15);
root.right.right = newNode(8);
root.right.right.right = newNode(6);
/*get the number of levels in the binary tree*/
console.log("The number of levels in the binary tree is: " + countLevels(root));
