var targetIndices = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let firstIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      if (nums[mid] === target) firstIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (firstIndex === -1) return [];

  left = firstIndex;
  right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) left = mid + 1;
    else right = mid - 1;
  }

  return [...Array(right - firstIndex + 1).keys()].map((i) => firstIndex + i);
};
