function letterCombination(n) {
  let res = [];

  function dfs(path, startIndex) {
    if (startIndex === n) {
      res.push(path.join(""));
      return;
    }

    for (let char of "ab") {
      path.push(char);
      dfs(path, startIndex + 1);
      path.pop();
    }
  }

  dfs([], 0);
  return res;
}

console.log(letterCombination(2));
