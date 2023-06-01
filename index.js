function countArrangement(n) {
  let visited = Array.from({ length: n }, () => false);
  let res = [];

  function dfs(i, path) {
    if (i > n) {
      res.push([...path]);
      return 1;
    }

    let count = 0;
    for (let num = 1; num <= n; num++) {
      if (!visited[num] && (i % num === 0 || num % i === 0)) {
        visited[num] = true;
        path.push(num);
        count += dfs(i + 1, path);

        path.pop();
        visited[num] = false;
      }
    }
    return count;
  }

  dfs(1, []);
  console.log(res);
  return res.length;
}

console.log(countArrangement(3));
