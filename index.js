function firstElementNotSmallerThanTarget(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return arr[l];
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(firstElementNotSmallerThanTarget(arr, 0));
