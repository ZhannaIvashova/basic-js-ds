const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  addNode(data) {
    if (data < this.data) {
      if (this.left === null) {
        this.left = new Node(data);
      } else {
        this.left.addNode(data);
      }
    } else {
      if (this.right === null) {
        this.right = new Node(data);
      } else {
        this.right.addNode(data);
      }
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = new Node(data);
    } else {
      this.rootNode.addNode(data);
    }
  }

  has(data) {
    let current = this.rootNode;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    let current = this.rootNode;
    while (current !== null) {
      if (current.data === data) {
        return current;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove(data, current = this.rootNode) {
    if (!current) return null;

    if (data < current.data) {
      current.left = this.remove(data, current.left);
      return current;
    } else if (data > current.data) {
      current.right = this.remove(data, current.right);
      return current;
    } else {
      if (current.left === null && current.right === null) {
        return null;
      }

      if (current.left === null) return current.right;
      if (current.right === null) return current.left;

      let minFromRight = this.findMin(current.right);
      current.data = minFromRight.data;
      current.right = this.remove(minFromRight.data, current.right);
      return current;
    }
  }

  findMin(current) {
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  min() {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
