var rightSideView = function (root) {
  if (!root) return [];

  let res = [];
  let queue = [root];

  while (queue.length > 0) {
    let n = queue.length;
    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      if (i === n - 1) res.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return res;
};
