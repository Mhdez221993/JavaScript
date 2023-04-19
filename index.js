function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return sort(left, right);
}

function sort(left, right) {
  let final = [];

  let [i, j] = [0, 0];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      final.push(left[i]);
      i++;
    } else {
      final.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    final.push(left[i]);
    i++;
  }

  while (j < right.length) {
    final.push(right[j]);
    j++;
  }

  return final;
}

let arr = [1, 10, 9, 3, 2, 20, 18];
console.log(mergeSort(arr));
