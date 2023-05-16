function subsets(nums) {
  let res = [];
  let numsSet = new Set();
  dfs(nums, 0, res, []);
  return res;
}

function dfs(nums, start, res, path) {
  if (start === nums.length) {
    return;
  }

  for (let end = start + 1; end < nums.length + 1; end++) {
    let subSet = nums.slice(start, end);
    res.push([...subSet]);
    dfs(nums, end, res);
  }
}

let nums = [1, 2, 3];
console.log(subsets(nums));
