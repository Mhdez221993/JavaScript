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
  let prev = null;

  function dfs(root) {
    if (root === null) return;

    dfs(root.right);
    dfs(root.left);

    root.right = prev;
    root.left = null;
    prev = root;
  }

  dfs(root);

  return root;
};

flatten(bt);
console.log(bt);
