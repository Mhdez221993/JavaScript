// 1. Find the minimun element in the array
// 2. Swap it with the element at the first position
// 3. Find the second minimun element
// 4. Swap it with the second minimun element
// 5. continue this process until the entire array is sorted

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([9, 3, 6, 2, 1, 11]));
