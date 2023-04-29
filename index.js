function visibleTreeNode(root, max = -Infinity) {
  if (!root) return 0;

  let total = 0;
  if (root.val >= max) total++;

  total += visibleTreeNode(root, Math.max(root.left, Math.max(root.val, max)));
  total += visibleTreeNode(root, Math.max(root.right, Math.max(root.val, max)));

  return total;
}
