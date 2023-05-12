function generateParentheses(n) {
  let res = [];

  function dfs(path, openCount, closeCount) {
    if (path.length === n * 2) {
      res.push(path.join(""));
      return;
    }

    for (let char of ["(", ")"]) {
      if (char === "(" && openCount >= n) {
        continue;
      }

      if (char === ")" && closeCount >= openCount) {
        continue;
      }

      if (char === "(") {
        openCount += 1;
      } else {
        closeCount += 1;
      }

      path.push(char);
      dfs(path, openCount, closeCount);

      if (char === "(") {
        openCount -= 1;
      } else {
        closeCount -= 1;
      }

      path.pop();
    }
  }

  dfs([], 0, 0);
  return res;
}

function* main() {
  const n = parseInt(yield);
  const res = generateParentheses(n);
  res.sort();
  for (const line of res) {
    console.log(line);
  }
}

class EOFError extends Error {}
{
  const gen = main();
  const next = (line) => gen.next(line).done && process.exit();
  let buf = "";
  next();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", (data) => {
    const lines = (buf + data).split("\n");
    buf = lines.pop();
    lines.forEach(next);
  });
  process.stdin.on("end", () => {
    buf && next(buf);
    gen.throw(new EOFError());
  });
}
