function partition(s) {
  let res = [];
  dfs(s, 0, [], res);
  return res;
}

function dfs(s, start, path, res) {
  if (start === s.length) {
    res.push([...path]);
    return;
  }

  for (let end = start + 1; end <= s.length; end++) {
    const prefix = s.substring(start, end);

    if (isPalindrome(prefix)) {
      path.push(prefix);
      dfs(s, end, path, res);
      path.pop();
    }
  }
}

function isPalindrome(word) {
  let l = 0,
    r = word.length - 1;
  while (l < r) {
    if (word.charAt(l) != word.charAt(r)) return false;
    l++;
    r--;
  }
  return true;
}

console.log(partition("aab"));
