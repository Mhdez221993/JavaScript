function dfs(root, path, res) {
  if (root.children.length === 0) {
    path.push(root.val);
    res.push(path.join("->"));
    path.pop();
    return;
  }

  for (let child of root.children) {
    if (child) {
      path.push(root.val);
      dfs(child, path, res);
      path.pop();
    }
  }
}

function ternaryTreePaths(root) {
  let res = [];
  dfs(root, [], res);
  return res;
}

let root = {
  val: 1,
  children: [
    { val: 2, children: [{ val: 3, children: [] }] },
    { val: 4, children: [] },
    { val: 6, children: [] },
  ],
};

console.log(ternaryTreePaths(root));
