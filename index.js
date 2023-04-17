function findFirstOccurrence(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  let firt_occurrence = -1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (arr[mid] === target && (mid === 0 || arr[mid - 1] !== target)) {
      return mid;
    }

    if (arr[mid] === target) {
      r = mid - 1;
      firt_occurrence = mid;
    } else if (arr[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return firt_occurrence;
}
