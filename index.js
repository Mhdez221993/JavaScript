function lettersCombination(n) {
  let res = [];
  dfs(n, [], res);
  return res;
}

function dfs(n, path, res) {
  if (path.length === n) {
    res.push(path.join());
    return;
  }

  for (let char of "ab") {
    path.push(char);
    dfs(n, path, res);
    path.pop();
  }
}

console.log(lettersCombination(2));
