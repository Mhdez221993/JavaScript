// Implement a function `uniqueArray` that takes in an array and areturns a duplicate-free version of the array

function uniqueArray(array) {
  return [...new Set(array)];
}

function uniqueArray2(array) {
  return Array.from(new Set(array));
}

console.log(uniqueArray([0]));
