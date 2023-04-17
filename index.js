const readline = require("readline");

function findNOccurrence(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (arr[mid] >= target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  if (arr[l] !== target) {
    return -1;
  }

  let count = 0;
  let i = l;
  while (arr[i] && arr[i] === target) {
    count++;
    i++;
  }

  return count;
}

let arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100];
let target = 3;

console.log(findFirstOccurrence(arr, target));
