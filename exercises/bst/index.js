// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = {};
    this.right = {};
  }
  insert(data, node = this) {
    if (!node || !node.data) {
      node.data = data;
      return node;
    }

    if (data < node.data) {
      node.left = this.insert(data, "left" in node ? node.left : new Node());
    } else {
      node.right = this.insert(data, "right" in node ? node.right : new Node());
    }

    return node;
  }

  contains(data, node = this) {
    if (node.data === data) return node;
    if (!node.data) return null;

    if (data < node.data) {
      return !("left" in node) || !node.left.data
        ? null
        : this.contains(data, node.left);
    } else {
      return !("right" in node) || !node.right.data
        ? null
        : this.contains(data, node.right);
    }
  }
}

module.exports = Node;
