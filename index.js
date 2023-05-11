function letterCombination(n) {
  let res = [];

  function dfs(path) {
    if (path.length === n) {
      res.push(path.join(""));
      return;
    }

    for (let char of "ab") {
      path.push(char);
      dfs(path);
      path.pop();
    }
  }

  dfs([]);
  return res;
}

console.log(letterCombination(2));
