function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function recoverTree(root) {
  let prevNode = new TreeNode(-Infinity);
  let first = null;
  let second = null;

  function inorder(currNode) {
    if (currNode === null) return;

    inorder(currNode.left);
    if (first === null && prevNode.val >= currNode.val) {
      first = prevNode;
    }

    if (first !== null && prevNode.val >= currNode.val) {
      second = currNode;
    }

    prevNode = currNode;
    inorder(currNode.right);
  }

  inorder(root);
  let temp = first.val;
  first.val = second.val;
  second.val = temp;
}

let tree = {
  val: 2,
  left: { val: 1, left: null, right: null },
  right: { val: 3, left: { val: 4, left: null, right: null }, right: null },
};

console.log(recoverTree(tree));
console.log(tree);
