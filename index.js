function fill(array, value, start = 0, end = array.length) {
  if (start < 0) {
    start = -start > array.length ? 0 : start + array.length;
  }

  if (end < 0) {
    end += array.length;
  }

  for (let i = start; i < Math.min(end, array.length); i++) {
    array[i] = value;
  }

  return array;
}

console.log(fill([1, 2, 3], "*", -2)); // ['a', 'a', 'a']
