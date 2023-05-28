var isValidBST = function (root) {
  function dfs(root, min, max) {
    if (!root) return true;
    if (!(min < root.val && root.val < max)) return false;
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  }

  return dfs(root, -Infinity, Infinity);
};

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

console.log(lcaOnBst(tree, 6, 8));
