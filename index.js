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

  add(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (current) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  delete(val) {
    if (!this.root) return;

    let parent = null;
    let current = this.root;
    let isLeft = false;

    while (current && current.val !== val) {
      parent = current;

      if (val < current.val) {
        isLeft = true;
        current = current.left;
      } else {
        isLeft = false;
        current = current.right;
      }
    }

    if (!current) return;

    if (!current.left && !current.right) {
      if (!parent) {
        this.root = null;
      } else if (isLeft) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (!current.right) {
      if (!parent) {
        this.root = current.left;
      } else if (isLeft) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    } else if (!current.left) {
      if (!parent) {
        this.root = current.right;
      } else if (isLeft) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    } else {
      let minRight = current.right;
      let minRightParent = current;

      while (minRight.left) {
        minRightParent = minRight;
        minRight = minRight.left;
      }

      current.val = minRight.val;

      if (current === minRightParent) {
        minRightParent.right = minRight.right;
      } else {
        minRightParent.left = minRight.right;
      }
    }

    return this.root;
  }

  get_root() {
    return this.root;
  }
}

let bst = new BST();
let arr = [10, 7, 20, 15, 25, 17];
for (let val of arr) {
  bst.add(val);
}

// console.log(bst.get_root());

console.log(bst.delete(10));
