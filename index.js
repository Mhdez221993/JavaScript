var isSymmetric = function (root) {
  function isSameTree(a, b) {
    if (a == null || b == null) {
      return a == b;
    }

    if (a.val !== b.val) return false;

    return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
  }

  const b = reverse(root.right);

  return isSameTree(root.left, b);
};

function reverse(tree) {
  if (!tree) return;

  return new TreeNode(tree.val, reverse(tree.right), reverse(tree.left));
}
const q = {
  val: 2,
  left: { val: 1, left: null, right: null },
  right: null,
};

console.log(isSameTree(p, q));
