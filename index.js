function permutations(letters) {
  let res = [];

  function dfs(path, used) {
    if (path.length === letters.length) {
      res.push(path.join(""));
      return;
    }

    for (let i = 0; i < letters.length; i++) {
      if (!used[i]) {
        used[i] = true;
        path.push(letters[i]);
        dfs(path, used);
        path.pop();
        used[i] = false;
      }
    }
  }

  dfs([], Array(letters.length).fill(false));
  return res;
}

let letters = "abc";
console.log(permutations(letters));
