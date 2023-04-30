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

  find(val, tree = this.root, parent = this.root, is_left = false) {
    if (!tree) {
      return { found: false };
    }

    if (val === tree.val) {
      return { found: true, parent, node: tree, is_left };
    } else if (val < tree.val) {
      return this.find(val, tree.left, tree, true);
    } else {
      return this.find(val, tree.right, tree, false);
    }
  }

  delete(val, tree = this.root) {
    let { found, parent, node, is_left } = this.find(val, tree);
    if (!found) return false;

    if (!node.right) {
      if (is_left) {
        parent.left = node.left;
      } else {
        parent.right = node.left;
      }
    } else {
      let min_node = this.min(node.right);
      // console.log(node.right);
      node.val = min_node;
      return this.delete(min_node, node.right);
    }
  }

  min(tree = this.root) {
    if (!tree.left) {
      return tree.val;
    }

    return this.min(tree.left);
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

// console.log(bst.find(4).found);

bst.delete(10);

bst.print();
