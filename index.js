function wordBreak(s, words) {
  return dfs(s, words, 0);
}

function dfs(s, words, index) {
  if (index === s.length) return true;

  let ans = false;

  for (let word of words) {
    if (s.slice(index).startsWith(word)) {
      ans = ans || dfs(s, words, index + word.length);
    }
  }

  return ans;
}

let s = "algomonster";
let words = ["algo", "monster"];

console.log(wordBreak(s, words));
