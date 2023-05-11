function findLastIndex(array, predicate, fromIndex = array.length - 1) {
  if (fromIndex < 0) {
    fromIndex = Math.max(0, fromIndex + array.length);
  }

  if (fromIndex > array.length) {
    fromIndex = array.length - 1;
  }

  for (let i = fromIndex; i >= 0; i--) {
    if (predicate(array[i])) {
      return i;
    }
  }

  return -1;
}

const predicate = (value) => value > 3;
let array = [1, 2, 3, 4, 5];

console.log(findLastIndex(array, predicate, -2));
