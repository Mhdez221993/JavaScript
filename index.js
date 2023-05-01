function phone_combination(phone) {
  let res = [];
  dfs(phone, [], res, 0);
  return res;
}

function dfs(phone, path, res, i) {
  if (i === phone.length) {
    res.push(path.join(" "));
    return;
  }

  for (let char of root[phone[i]]) {
    path.push(char);
    dfs(phone, path, res, i + 1);
    path.pop();
  }
}

const root = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

let phone = "56";

let arr1 = phone_combination(phone);
console.log(arr1);
