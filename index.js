let tree = {
  val: 1,
  children: [
    { val: 2, children: [{ val: 3, children: [] }] },
    { val: 4, children: [] },
    { val: 6, children: [] },
  ],
};

function dfs(tree) {
  let stack = [{ node: tree, path: [] }];
  let res = [];

  while (stack.length > 0) {
    let { node, path } = stack.pop();
    let newPath = [...path, node.val];

    if (node.children.length === 0) {
      res.push(newPath.join("->"));
    } else {
      for (let i = node.children.length - 1; i >= 0; i--) {
        let child = node.children[i];
        stack.push({ node: child, path: newPath });
      }
    }
  }

  return res;
}

console.log(dfs(tree));
