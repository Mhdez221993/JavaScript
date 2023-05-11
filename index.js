let twoSum = function (nums, target) {
  let valueIndexMap = new Map();
  for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
    if (valueIndexMap.has(nums[currentIndex])) {
      return [valueIndexMap.get(nums[currentIndex]), currentIndex];
    } else {
      let complement = target - nums[currentIndex];
      valueIndexMap.set(complement, currentIndex);
    }
  }

  return [];
};

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));
