function letterCombination(n) {
  let res = [];
  dfs(n, [], res);
  return res;
}

function dfs(n, path, res) {
  if (path.length === n) {
    res.push(path.join(""));
    // path.pop();
    return;
  }

  for (let char of "ab") {
    path.push(char);
    dfs(n, path, res);
    path.pop();
  }
}

let arr1 = letterCombination(4);
let arr2 = [
  "aaaa",
  "aaab",
  "aaba",
  "aabb",
  "abaa",
  "abab",
  "abba",
  "abbb",
  "baaa",
  "baab",
  "baba",
  "babb",
  "bbaa",
  "bbab",
  "bbba",
  "bbbb",
];

console.log(JSON.stringify(arr1) === JSON.stringify(arr2));
