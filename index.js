class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function validBst(root) {
  function dfs(root, min_val, max_val) {
    // empty nodes are always valid
    if (!root) return true;

    if (!(min_val < root.val && root.val < max_val)) return false;

    // see notes below
    return (
      dfs(root.left, min_val, root.val) && dfs(root.right, root.val, max_val)
    );
  }
  return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY); // root is always valid
}

let root = {
  val: 5,
  left: { val: 2, left: { val: 1 }, right: { val: 3 } },
  right: { val: 7 },
};
