const bt = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

var sumNumbers = function (root) {
  function dfs(root, currSum) {
    if (root == null) return 0;

    currSum = currSum * 10 + root.val;

    if (root.left == null && root.right == null) return currSum;

    return dfs(root.left, currSum) + dfs(root.right, currSum);
  }

  return dfs(root, 0);
};

console.log(sumNumbers(bt));
