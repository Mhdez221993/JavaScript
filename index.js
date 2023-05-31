function printPath(root) {
  let res = [];
  if (root) dfs(root, [], res);
  return res;
}

function dfs(root, path, res) {
  if (root == null) return;

  if (root.left == null && root.right == null) {
    path.push(root.val);
    res.push(path.join("->"));
    path.pop();
    return;
  }

  path.push(root.val);
  dfs(root.left, path, res);
  dfs(root.right, path, res);
  path.pop();
}

var bt = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: null,
  },
};

console.log(printPath(bt));
