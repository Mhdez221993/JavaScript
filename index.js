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
  dfs(tree, [], res);
  return res;
}

function dfs(tree, path, res) {
  if (tree.children.length === 0) {
    path.push(tree.val);
    res.push(path.join("->"));
    path.pop();
    return;
  }

  for (let child of tree.children) {
    path.push(tree.val);
    dfs(child, path, res);
    path.pop();
  }
}

console.log(all_root_to_leaf(tree));
