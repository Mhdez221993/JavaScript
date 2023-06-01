function all_possible_subsets(nums) {
  let ans = [];
  nums.sort((a, b) => a - b);

  function dfs(startIndex, path) {
    ans.push([...path]);

    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) continue;
      path.push(nums[i]);
      dfs(i + 1, path);
      path.pop();
    }
  }

  dfs(0, []);
  return ans;
}

console.log(all_possible_subsets([1, 2, 2]));
