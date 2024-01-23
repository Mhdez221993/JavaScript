function firstNotSmallerThanTarget(arr, target) {
  let firstNotSmaller = -1;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) {
      firstNotSmaller = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return firstNotSmaller;
}

let arr = [1, 3, 3, 5, 8, 8, 10];
let target = 8;

console.log(firstNotSmallerThanTarget(arr, target));
