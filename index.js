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
  return dfs(root, -Infinity, Infinity); // root is always valid
}

let tree = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 6,
    right: {
      val: 8,
      left: null,
      right: null,
    },
  },
};

console.log(validBst(tree));
