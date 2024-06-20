// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    if (currentNode === null) {
      this.root = new TreeNode(val);

    } else if (val < currentNode.val) {

      if (currentNode.left) {
        this.insert(val, currentNode.left);
      } else {
        currentNode.left = new TreeNode(val);
      }

    } else {

      if(currentNode.right) {
        this.insert(val, currentNode.right);
      } else {
        currentNode.right = new TreeNode(val);
      }

    }
  }

  search(val, currentNode = this.root) {
    // Your code here
    if (currentNode === null) return false;
    if (currentNode.val === val) return true;

    if (this.search(val, currentNode.left)) return true;
    return this.search(val, currentNode.right)
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;
    console.log(currentNode.val);

    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val)
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let node = queue.shift();
      console.log(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    const stack = [];
    stack.push(this.root);

    while (stack.length > 0) {
      let node = stack.pop();
      console.log(node.val);

      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
