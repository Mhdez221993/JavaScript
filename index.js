function indexEqualsValueSearch(arr) {
  let left = 0;
  let right = arr.length - 1;
  let lowest = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == mid) {
      lowest = mid;
    } else if (arr[mid] < mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return lowest;
}

console.log(indexEqualsValueSearch([-8, 0, 2, 5]));
