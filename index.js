function treeMaxDepth(tree) {
  return !tree ? 0 : dfs(tree) - 1;
}

function dfs(tree) {
  if (!tree) return 0;

  return Math.max(dfs(tree.left), dfs(tree.right)) + 1;
}

let tree = {
  value: 5,
  left: {
    value: 4,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    value: 6,
    right: {
      value: 8,
      left: null,
      right: null,
    },
  },
};

console.log(treeMaxDepth(tree));
