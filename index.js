const bt = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 5,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null,
    },
  },
};

var flatten = function (root) {
  if (root == null) return [];

  function dfs(root) {
    if (root === null) return;

    dfs(root.left);
    dfs(root.right);

    if (root.left !== null) {
      const temp = root.right;
      root.right = root.left;
      root.left = null;

      let t = root.right;
      while (t.right !== null) {
        t = t.right;
      }
      t.right = temp;
    }
  }

  dfs(root);

  return root;
};

flatten(bt);
console.log(bt);
