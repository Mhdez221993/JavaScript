// 1. Find the minimun element in the array
// 2. Swap it with the element at the first position
// 3. Find the second minimun element
// 4. Swap it with the second minimun element
// 5. continue this process until the entire array is sorted

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

console.log(selectionSort([9, 3, 6, 2, 1, 11]));
