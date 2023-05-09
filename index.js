let tree = {
  val: 1,
  children: [
    { val: 2, children: [{ val: 3, children: [] }] },
    { val: 4, children: [] },
    { val: 6, children: [] },
  ],
};

function dfs(node, path, res) {
  if (node.children.length === 0) {
    path.push(node.val);
    res.push(path.join("->"));
    path.pop();
    return;
  }

  for (let child of node.children) {
    path.push(node.val);
    dfs(child, path, res);
    path.pop();
  }
}

function ternaryTreePaths(tree) {
  let res = [];
  dfs(tree, [], res);
  return res;
}

console.log(ternaryTreePaths(tree));
