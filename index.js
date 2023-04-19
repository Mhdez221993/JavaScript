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

  maxDepth(root = this.root) {
    if (!root) {
      return 0;
    }

    let left = this.maxDepth(root.left);
    let right = this.maxDepth(root.right);

    return Math.max(left, right) + 1;
  }

  countVisibleNodes(root = this.root, max = -Infinity) {
    if (!root) {
      return 0;
    }

    let total = 0;

    if (root.val >= max) total++;

    total += this.countVisibleNodes(root.left, Math.max(root.val, max));
    total += this.countVisibleNodes(root.right, Math.max(root.val, max));

    return total;
  }

  get_root() {
    return this.root;
  }
}

let bst = new BST();
let arr = [-100, -500, -50];
for (let val of arr) {
  bst.add(val);
}

console.log(bst.countVisibleNodes());
