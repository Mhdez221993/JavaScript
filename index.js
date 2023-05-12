function uniqueArray(array) {
  return Array.from(new Set(array));
}

console.log(uniqueArray([1, 2, 3, 3, 3, null, undefined]));
