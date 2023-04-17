function findMinRotated(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (arr[mid] <= arr[r]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return l;
}

let arr = [1, 2, 3, 5, 8];
console.log(findMinRotated(arr));
