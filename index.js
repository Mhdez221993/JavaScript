class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val, tree = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }

    if (!tree) {
      return new Node(val);
    }

    if (val < tree.val) {
      tree.left = this.insert(val, tree.left);
    } else {
      tree.right = this.insert(val, tree.right);
    }

    return tree;
  }

  print() {
    console.log(this.root);
  }
}

let arr = [8, 3, 10, 1, 6, 4];

let bst = new BST();
for (let v of arr) {
  bst.insert(v);
}

bst.print();
