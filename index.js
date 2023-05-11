function dropRightWhile(array, predicate) {
  let i = array.length - 1;

  while (i >= 0 && predicate(array[i], i, array)) {
    i--;
  }

  return array.slice(0, i + 1);
}

console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 3)); // => [1, 2, 3]
console.log(dropRightWhile([1, 2, 3], (value) => value < 6)); // => []
console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 6)); // => [1, 2, 3, 4, 5]
