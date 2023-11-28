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
  add(data) {
    if (!this.root) {
      this.root = new Node(data);
      return;
    } else {
      let current = this.root;
      if (data > current.data) {
        current.right = new Node(data);
      }
      if (data < current.data) {
        current.left = new Node(data);
      }
    }
  }
}
const node1 = new Node(5);
const tr = new Tree();
tr.add(5); //?
tr.root; //?
tr.add(1); //?
tr.root; //?
tr.root.right; //?

node1;
