// Implement a function that performs an insertion sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = i;

    while (curr > 0 && arr[curr] < arr[curr - 1]) {
      [arr[curr], arr[arr[i - 1]]] = [arr[curr - 1], arr[curr]];
      curr--;
    }
  }

  return arr;
}

console.log(insertionSort([9, 3, 6, 2, 1, 11]));
