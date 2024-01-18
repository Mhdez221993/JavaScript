function sortedArray(arr) {
  // sort arr in ascending order
  arr.sort((a, b) => a - b);
  console.log(arr);

  // sort arr in descending order
  arr.sort((a, b) => b - a);
  console.log(arr);
}

sortedArray([32, 78, 665, 9, 3, 40, 5]);
