function generateParentheses(n) {
  const dfs = (path, openCount, closeCount, res) => {
    if (path.length === 2 * n) {
      res.push(path.join(""));
      return;
    }

    for (const parenthesis of ["(", ")"]) {
      if (parenthesis === "(" && openCount >= n) {
        continue;
      }
      if (parenthesis === ")" && closeCount >= openCount) {
        continue;
      }

      path.push(parenthesis);
      if (parenthesis === "(") {
        openCount++;
      } else {
        closeCount++;
      }

      dfs(path, openCount, closeCount, res);

      // reverting the state
      if (parenthesis === "(") {
        openCount--;
      } else {
        closeCount--;
      }
      path.pop();
    }
  };

  const ans = [];
  dfs([], 0, 0, ans);
  return ans;
}

console.log(generateParentheses(2));
