function generate_parentheses(n) {
  let res = [];
  dfs(0, [], res, 0, 0, n);
  return res;
}

function dfs(start_index, path, res, open_count, close_count, n) {
  if (start_index === 2 * n) {
    res.push(path.join(""));
    return;
  }

  if (open_count < n) {
    path.push("(");
    dfs(start_index + 1, path, res, open_count + 1, close_count, n);
    path.pop();
  }

  if (close_count < open_count) {
    path.push(")");
    dfs(start_index + 1, path, res, open_count, close_count + 1, n);
    path.pop();
  }
}

let parentheses = generate_parentheses(2);
console.log(parentheses);
