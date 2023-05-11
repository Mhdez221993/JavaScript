function difference(array, values) {
  const result = [];

  // Create a set of all the values in the values arrays
  const valuesSet = new Set(values.flat());

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    // Check if the value is in the values set
    if (!valuesSet.has(value) && !(value === undefined && !(i in array))) {
      result.push(value);
    }
  }

  return result;
}

console.log(difference([1, 2, 3], [2, 3])); // => [1]
console.log(difference([1, 2, 3, 4], [2, 3], [1, 2])); // => [4]
console.log(difference([1, 2, 3], [2, 3], [1, 4])); // => []
console.log(difference([1, , 3], [1])); // => [3]

console.log(difference([1, 2, 3], [])); // => [1, 2, 3]

console.log(difference([1, undefined, 3, 4], [3, 4]));
