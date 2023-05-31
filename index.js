function decodeWays(digits) {
  return dfs(0, digits, {});
}

function dfs(startIndex, digits, memo) {
  if (startIndex === digits.length) return 1;
  if (startIndex in memo) return memo[startIndex];

  let ways = 0;
  if (digits[startIndex] == "0") return ways;
  // can't decode string with leading 0

  // decode one digit
  ways += dfs(startIndex + 1, digits, memo);
  // decode two digits
  if (
    startIndex + 2 <= digits.length &&
    parseInt(digits.substring(startIndex, startIndex + 2)) <= 26
  ) {
    ways += dfs(startIndex + 2, digits, memo);
  }

  memo[startIndex] = ways;

  return ways;
}
