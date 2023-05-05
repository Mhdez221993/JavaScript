function wordBreak(s, words) {
  const memo = {};

  function dfs(index) {
    if (index === s.length) return true;

    if (index in memo) return memo[index];

    let ans = false;
    for (let word of words) {
      if (s.slice(index).startsWith(word)) {
        if (dfs(index + word.length)) {
          ans = true;
          break;
        }
      }
    }

    memo[index] = ans;

    return ans;
  }

  return dfs(0);
}

let target =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
let words = [
  "a",
  "aa",
  "aaa",
  "aaaa",
  "aaaaa",
  "aaaaaa",
  "aaaaaaa",
  "aaaaaaaa",
  "aaaaaaaaa",
  "aaaaaaaaaa",
];
console.log(wordBreak(target, words));
