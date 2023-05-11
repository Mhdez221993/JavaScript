// Binary Search Template
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let first_true_index = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (feasible(mid)) {
      first_true_index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return first_true_index;
}
