function dropWhile(array, predicate) {
  let i = 0;

  while (i < array.length && predicate(array[i], i, array)) {
    i++;
  }

  return array.slice(i);
}

console.log(dropWhile([1, 2, 3, 4, 5], (value) => value < 3)); // => [1, 2, 3]
console.log(dropWhile([1, 2, 3], (value) => value < 6)); // => []
