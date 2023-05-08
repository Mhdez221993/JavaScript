let tree = {
  val: 1,
  children: [
    { val: 2, children: [{ val: 3, children: [] }] },
    { val: 4, children: [] },
    { val: 6, children: [] },
  ],
};

function all_root_to_leaf(tree) {
  let res = [];
  if (tree) dfs(tree, [], res);
  return res;
}

function dfs(tree, path, res) {
  path.push(tree.val);

  for (let child of tree.children) {
    if (child.children.length === 0) {
      path.push(child.val);
      res.push(path.join("->"));
      path.pop();
      continue;
    }
    dfs(child, path, res);
    path.pop();
  }
}

console.log(all_root_to_leaf(tree));
