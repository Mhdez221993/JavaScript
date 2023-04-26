function bubbleSort(unsortedList) {
  let arr = unsortedList;
  let i = 0;

  while (i < arr.length) {
    let swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
      console.log(i);
    }

    if (!swapped) {
      return arr;
    }

    i++;
  }

  return arr;
}

// let arr = [5, 3, 1, 2, 4];
let arr = [1, 2, 3, 4, 5];
console.log(bubbleSort(arr));
