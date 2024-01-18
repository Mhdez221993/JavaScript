function mergeSort(arr) {
  const n = arr.length;
  // Base case: a list of size 0 or 1 is sorted
  if (n <= 1) return arr;

  // split the list in left and right halves
  let mid = Math.floor(n / 2);
  let leftList = mergeSort(arr.slice(0, mid));
  let rightList = mergeSort(arr.slice(mid));

  let res = [];
  let leftPtr = 0;
  let rightPtr = 0;

  // merge the left and right lists with two pointers
  while (leftPtr < mid || rightPtr < n - mid) {
    if (leftPtr === mid) {
      // if the left list is exhausted push element from right list
      res.push(rightList[rightPtr]);
      rightPtr++;
    } else if (rightPtr === n - mid) {
      // if the right list is exhausted push element from left list
      res.push(leftList[leftPtr]);
      leftPtr++;
    } else if (leftList[leftPtr] <= rightList[rightPtr]) {
      // append smaller element from left
      res.push(leftList[leftPtr]);
      leftPtr++;
    } else {
      // append smaller element from right
      res.push(rightList[rightPtr]);
      rightPtr++;
    }
  }

  return res;
}

console.log(mergeSort([5, 3, 1, 2, 4]));
