function permutation(nums) {
  let res = [];
  let used = Array(nums.length).fill(false);

  function dfs(startIndex, path, res, used) {
    if (startIndex == nums.length) {
      res.push(path.join(""));
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        used[i] = true;
        path.push(nums[i]);
        dfs(startIndex + 1, path, res, used);
        path.pop();
        used[i] = false;
      }
    }
  }

  dfs(0, [], res, used);
  return res;
}

let nums = [1, 2, 3];
console.log(permutation(nums));
