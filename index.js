var isSymmetric = function (root) {
  function isMirror(root1, root2) {
    if (root1 == null && root2 == null) return true;
    if (root1 == null || root2 == null) return false;
    if (root1.val !== root2.val) return false;
    return (
      isMirror(root1.right, root2.left) && isMirror(root1.left, root2.right)
    );
  }
  return isMirror(root, root);
};
