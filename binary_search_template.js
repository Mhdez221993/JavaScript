function binarySearch(arr, target) {
  let left = arr[0];
  let right = arr[arr.length - 1];

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else if (arr[middle] > target) {
      right = middle - 1;
    }
  }

  return -1;
}

const arr = [1, 3, 6, 8, 9, 10];
const target = 8;
console.log(binarySearch(arr, target));
