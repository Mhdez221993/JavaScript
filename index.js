function permutations(letters) {
  let res = [];
  let used = Array(letters.length).fill(false);
  dfs(letters, used, res, []);
  return res;
}

function dfs(letters, used, res, path) {
  if (path.length === letters.length) {
    res.push(path.join(""));
    return;
  }

  for (let i = 0; i < letters.length; i++) {
    if (!used[i]) {
      used[i] = letters[i];
      path.push(letters[i]);
      dfs(letters, used, res, path);
      path.pop();
      used[i] = false;
    }
  }
}

let letters = "abc";
console.log(permutations(letters));
