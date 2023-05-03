function string_into_palindromes(s) {
  let res = [];
  const n = s.length;

  function dfs(start, path) {
    if (start == n) {
      res.push([...path]);
      return;
    }

    for (let end = start + 1; end < n + 1; end++) {
      const prefix = s.substring(start, end);

      if (isPalindrome(prefix)) {
        path.push(prefix);
        dfs(end, path);
        path.pop();
      }
    }
  }

  dfs(0, []);

  return res;
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

const s = "aab";

const arr1 = string_into_palindromes(s);
console.log(arr1);
