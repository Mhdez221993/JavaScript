function combinationSum(candidates, target) {
  candidates.sort((a, b) => a - b);
  let res = [];
  dfs(candidates, target, res, [], 0);
  return res;
}

function dfs(nums, target, res, path, start) {
  if (target === 0) {
    res.push([...path]);
    return;
  }

  for (let i = start; i < nums.length; i++) {
    if (target - nums[i] < 0) continue;

    path.push(nums[i]);

    dfs(nums, target - nums[i], res, path, i);

    path.pop();
  }
}

let candidates = [2, 3, 6, 7];
let target = 7;
console.log(combinationSum(candidates, target));
