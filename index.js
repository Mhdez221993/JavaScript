class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function validBst(root, min = -Infinity, max = Infinity) {
  if (!root) return true;

  if (!(min < root.val && root.val < max)) return false;

  let left = validBst(root.left, min, root.val);
  let right = validBst(root.left, root.val, max);

  return left && right;
}
