function bubleSort(arr) {
  let n = arr.length;

  for (let i = n - 1; i >= 0; i--) {
    let swapped = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) return arr;
  }

  return arr;
}

console.log(bubleSort([2, 1, 10, 3, 8, 3, 4, 5]));
