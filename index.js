function permutations(letters) {
  let res = [];

  function dfs(path, startIndex, mySet) {
    if (startIndex === letters.length) {
      res.push(path.join(""));
      return;
    }

    for (let char of letters) {
      if (!mySet.has(char)) {
        mySet.add(char);
        path.push(char);
        dfs(path, startIndex + 1, mySet);
        path.pop();
        mySet.delete(char);
      }
    }
  }

  dfs([], 0, new Set());
  return res;
}
