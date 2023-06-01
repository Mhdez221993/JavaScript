function permuteUnique(nums) {
  let used = new Array(nums.length).fill(false);
  let ans = [];
  nums.sort((a, b) => a - b);

  function dfs(path_length, path) {
    if (path_length === nums.length) {
      ans.push(Array.from(path));
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      path.push(nums[i]);
      used[i] = true;
      dfs(path_length + 1, path);
      used[i] = false;
      path.pop();
    }
  }

  dfs(0, []);
  return ans;
}
