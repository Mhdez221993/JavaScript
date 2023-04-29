function treeMaxDepth(root) {
  return !root ? 0 : dfs(root) - 1;
}

function dfs(root) {
  if (!root) return 0;

  return Math.max(dfs(root.left), dfs(root.right)) + 1;
}
