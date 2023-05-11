function chunk(array, size = 1) {
  let count = 0;
  let result = [];
  let chuck = [];

  for (let i = 0; i < array.length; i++) {
    chuck.push(array[i]);
    count++;

    if (count === size || i === array.length - 1) {
      count = 0;
      result.push([...chuck]);
      chuck = [];
    }
  }

  return result;
}

console.log(chunk(["a", "b", "c", "d"])); // => [['a'], ['b'], ['c'], ['d']]
console.log(chunk([1, 2, 3, 4], 2)); // => [[1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4], 3)); // => [[1, 2, 3], [4]]
