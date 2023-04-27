function peakOfMountainArray(arr) {
  let l = 0;
  let r = arr.length - 1;
  let len = arr.length - 1;
  let ans = -1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (mid === len || arr[mid] > arr[mid + 1]) {
      ans = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return ans;
}
