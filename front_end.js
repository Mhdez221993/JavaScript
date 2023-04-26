function mergeSort(unsortedList) {
  if (unsortedList.length <= 1) {
    return unsortedList;
  }

  let mid = Math.floor(unsortedList.length / 2);
  let left = mergeSort(unsortedList.slice(0, mid));
  let right = mergeSort(unsortedList.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let [i, j] = [0, 0];
  let result = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

let arr = [5, 3, 1, 2, 4];
console.log(mergeSort(arr));
