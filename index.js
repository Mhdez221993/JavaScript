function partition(s) {
  let res = [];
  dfs(s, 0, [], res);
  return res;
}

function dfs(s, startIndex, path, res) {
  if (startIndex == s.length) {
    res.push([...path]);
    return;
  }

  for (let end = startIndex + 1; end < s.length + 1; end++) {
    let char = s.substring(startIndex, end);

    if (polindrome(char)) {
      path.push(char);
      dfs(s, end, path, res);
      path.pop();
    }
  }
}

function polindrome(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}

let s = "aab";
console.log(partition(s));
