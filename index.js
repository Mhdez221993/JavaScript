var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < nums[left]) {
      right = mid;
    } else {
      right--;
    }
  }

  return nums[left];
};

console.log(findMin([3, 1, 1]));
