function wordBreak(s, words) {
  return dfs(s, words, 0, {});
}

function dfs(s, words, index, memo) {
  if (index === s.length) return true;

  if (index in memo) return memo[index];

  let ans = false;
  for (let word of words) {
    if (s.slice(index).startsWith(word)) {
      if (dfs(s, words, index + word.length, memo)) {
        ans = true;
        break;
      }
    }
  }

  memo[index] = ans;

  return ans;
}

let s =
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

console.log(wordBreak(s, words));
