function wordBreak(s, words) {
  function dfs(index) {
    if (index === s.length) {
      return true;
    }

    let ans = false;
    for (let word of words) {
      if (s.slice(index).startsWith(word)) {
        ans = ans || dfs(index + word.length);
      }
    }

    return ans;
  }

  return dfs(0);
}

let target = "algomonsterww";
let words = ["algo", "monster", "ww"];
console.log(wordBreak(target, words));
