function dropRightWhile(array, predicate) {
  return array.filter((v) => !predicate(v));
}

console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 3)); // => [1, 2, 3]
console.log(dropRightWhile([1, 2, 3], (value) => value < 6)); // => []
console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 6)); // => [1, 2, 3, 4, 5]
