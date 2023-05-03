function permutations(letters) {
  let used = Array(letters.length).fill(false);

  let res = [];
  dfs(0, letters, [], res, used);
  return res;
}

function dfs(start, letters, path, res, used) {
  console.log(used);
  if (start == letters.length) {
    res.push(path.join(""));
    return;
  }

  for (let i = 0; i < letters.length; i++) {
    if (!used[i]) {
      path.push(letters[i]);
      used[i] = true;
      dfs(start + 1, letters, path, res, used);
      path.pop();
      used[i] = false;
    }
  }
}

const letters = "abc";
const res = permutations(letters);
console.log(res);
