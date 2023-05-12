var letterCombinations = function (digits) {
  let res = [];
  dfs(digits, 0, [], res);
  return res;
};

function dfs(digits, i, path, res) {
  if (path.length === digits.lenght) {
    res.push(path.join(""));
    return;
  }

  let curr = KEYBOARD[digits[i]];
  console.log(curr);

  for (let char of curr) {
    path.push(char);
    dfs(digits, i + 1, path, res);
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

console.log(letterCombinations("23"));
