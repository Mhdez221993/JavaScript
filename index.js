function generateParentheses(n) {
  let res = [];

  function dfs(index, path, opencount, closeCount) {
    if (index === n * 2) {
      res.push(path.join(""));
      return;
    }

    if (opencount < n) {
      path.push("(");
      dfs(index + 1, path, opencount + 1, closeCount);
      path.pop();
    }

    if (closeCount < opencount) {
      path.push(")");
      dfs(index + 1, path, opencount, closeCount + 1);
      path.pop();
    }
  }

  dfs(0, [], 0, 0);
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
  process.stdin.on("closeCount", () => {
    buf && next(buf);
    gen.throw(new EOFError());
  });
}
