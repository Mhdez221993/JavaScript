function valid_parentheses(s, n) {
  let res = [];

  function dfs(start, path) {
    if (start == n) {
      res.push(path);
      return;
    }

    for (let end = start + 1; end < n + 1; end++) {
      const prefix = s.substring(start, end);
      console.log(s[end]);

      path.push(prefix);
      dfs(end, path);
      path.pop();
    }
  }

  dfs(0, []);

  return res;
}

const s = "()";
const n = 2;

const arr1 = valid_parentheses(s, n);
console.log(arr1);
