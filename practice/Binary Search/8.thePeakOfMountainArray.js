/*

*/

function ThePeakOfMountainArray(arr) {
  let boundaryIndex = -1;
  let left = 0;
  let right = arr.length - 1;
  let len = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid === len || arr[mid] > arr[mid + 1]) {
      boundaryIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return boundaryIndex;
}

console.log(ThePeakOfMountainArray([0, 1, 2, 3, 2, 1, 0]));
