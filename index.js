function decodeWays(digits) {
  return dfs(digits, 0);
}

function dfs(digits, start) {
  if (start === digits.length) return 1;

  let ans = 0;

  if (digits[start] === "0") return ans;

  ans += dfs(digits, start + 1);

  if (
    start + 2 <= digits.length &&
    parseInt(digits.slice(start, start + 2)) <= 26
  ) {
    ans += dfs(digits, start + 2);
  }

  return ans;
}
