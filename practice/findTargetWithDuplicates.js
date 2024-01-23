// Time complexity: O(log(n))
// Space complexity: O(1)

function findFirstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let firstIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      firstIndex = mid;
      right = mid - 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return firstIndex;
}

let arr = [1, 2, 3, 3, 3, 6, 10, 10, 10, 100];
let target = 3;

console.log(findFirstOccurrence(arr, target));
