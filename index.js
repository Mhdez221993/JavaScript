/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let [left, right] = [0, nums.length - 1];

  let left_pos = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
      left_pos = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  let right_pos = -1;
  (left = 0), (right = nums.length - 1);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] <= target) {
      right_pos = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(right_pos);

  let indx_list = [];
  while (left_pos >= 0 && left_pos <= right_pos) {
    indx_list.push(left_pos);
    left_pos++;
  }

  return indx_list;
};

let nums = [1, 2, 5, 2, 3];
let target = 2;

console.log(targetIndices(nums, target));
