"use strict";

// Javascript implementation to find leaf count of a given Binary tree

/* A binary tree node has data,
	pointer to left child and
	a pointer to right child */
class node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

/* Function to get the count
	of leaf nodes in a binary tree*/
function getLeafCount(node) {
  if (node == null) return 0;
  if (node.left == null && node.right == null) return 1;
  else return getLeafCount(node.left) + getLeafCount(node.right);
}

/* Helper function that allocates a new node with the
	given data and NULL left and right pointers. */
function newNode(data) {
  let Node = new node(data);
  return Node;
}

/*create a tree*/
let root = newNode(4);
root.left = newNode(3);
root.right = newNode(11);
root.left.left = newNode(1);
// root.left.right = newNode(5);

/*get leaf count of the above created tree*/
console.log("The leaf count of binary tree is : " + getLeafCount(root));
