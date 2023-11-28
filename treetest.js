class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  append(data) {
    //if there is no root, entry will be root.
    //if there is root then entry will be assigned left or right node depending on < || >
    switch (this.root) {
      case !this.root:
        this.root = new Node(data);
        break;
      case this.root > data:
    }
  }
}

const nums = new Tree();
