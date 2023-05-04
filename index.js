function wordBreak(target, words) {
  function dfs(startIndex) {
    if (startIndex === target.length) return true;

    let ans = false;

    for (const word of words) {
      if (target.slice(startIndex).startsWith(word)) {
        ans = ans || dfs(startIndex + word.length);
      }
    }
    return ans;
  }

  return dfs(0);
}

let target = "algomonster";
let words = ["algo", "monster"];
console.log(wordBreak(target, words));
