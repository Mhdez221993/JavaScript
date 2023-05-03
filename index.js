function valid_parentheses(n) {
  let res = [];
  dfs(0, [], 0, 0, res, n);
  return res;
}

function dfs(start, path, open, close, res, n) {
  if (start === 2 * n) {
    res.push(path.join(""));
    return;
  }

  if (open < n) {
    path.push("(");
    dfs(start + 1, path, open + 1, close, res, n);
    path.pop();
  }

  if (close < open) {
    path.push(")");
    dfs(start + 1, path, open, close + 1, res, n);
    path.pop();
  }
}

const n = 2;
const arr1 = valid_parentheses(n);
console.log(arr1);
