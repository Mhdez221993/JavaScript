// Time Complexity O(log(n))
// Space Complexity O(1)

function findBoundary(arr) {
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid]) {
      boundaryIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return boundaryIndex;
}

console.log(findBoundary([false, false, true, true, true, true]));
