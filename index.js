function letterCombinationsOfPhoneNumber(digits) {
  let res = [];
  dfs(digits, 0, [], res);
  return res;
}

function dfs(digits, startIndex, path, res) {
  if (startIndex === digits.length) {
    res.push(path.join(""));
    return;
  }

  for (let char of KEYBOARD[digits[startIndex]]) {
    path.push(char);
    dfs(digits, startIndex + 1, path, res);
    path.pop();
  }
}

const KEYBOARD = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

const digits = "56";

console.log(letterCombinationsOfPhoneNumber(digits));
