function sumRootLeafPaht(root, target) {
  if (!root) return [];
  let res = [];

  function dfs(root, remainder, path) {
    if (!root) return;

    remainder -= root.val;
    path.push(root.val);

    if (!root.left && !root.right && remainder === 0) {
      res.push([...path]);
    } else {
      dfs(root.left, remainder, path);
      dfs(root.right, remainder, path);
    }
    path.pop();
  }

  dfs(root, target, []);
  return res;
}

let bt = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: null,
        right: null,
      },
    },
    right: null,
  },
  right: {
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: {
        val: 5,
        left: null,
        right: null,
      },
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
  },
};

console.log(sumRootLeafPaht(bt, 22));
