var grayCode = function (n) {
  let length = 1 << n;
  let visited = new Array(length).fill(false);

  function dfs(start_index, code) {
    if (start_index === length) {
      return true;
    }
    for (let i = 0; i < n; i++) {
      let new_code = code ^ (1 << i);
      if (!visited[new_code]) {
        path.push(new_code);
        visited[new_code] = true;
        if (dfs(start_index + 1, new_code)) return true;
        visited[new_code] = false;
        path.pop();
      }
    }
    return false;
  }

  let path = [0];
  visited[0] = true;
  dfs(1, 0);
  return path;
};
