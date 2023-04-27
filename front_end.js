function sort(arr, start, end) {
  if (end - start <= 1) {
    return;
  }

  let pivot = arr[end - 1];
  let s = start;
  let e = end - 1;

  while (s < e) {
    while (arr[s] < pivot && s < e) {
      s++;
    }

    while (arr[e] >= pivot && s < e) {
      e--;
    }

    if (s == e) break;

    [arr[s], arr[e]] = [arr[e], arr[s]];
  }

  [arr[s], arr[end - 1]] = [arr[end - 1], arr[s]];

  sort(arr, start, s);
  sort(arr, s + 1, end);
}

function quickSort(arr) {
  sort(arr, 0, arr.length);
  return arr;
}

let arr = [5, 3, 1, 2, 4];
console.log(quickSort(arr));
