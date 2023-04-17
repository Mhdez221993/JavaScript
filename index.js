function findPeakElement(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);

    if (mid == arr.length - 1 || arr[mid] > arr[mid + 1]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return arr[l];
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(findPeakElement(arr));
