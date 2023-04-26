function insertionSort(unsortedList) {
  let arr = unsortedList;

  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i;

    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }

  return arr;
}

let arr = [5, 3, 1, 2, 4];
console.log(insertionSort(arr));
