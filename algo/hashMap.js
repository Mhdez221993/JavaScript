// Take an integer array and returns a hash table with the array elements as keys and their frequencies as values.
function getCounter(arr) {
  const counter = new Map();

  for (num of arr) {
    if (counter.has(num)) {
      counter.set(num, counter.get(num) + 1);
    } else {
      counter.set(num, 1);
    }
  }

  return counter;
}

console.log(getCounter([3, 4, 2, 1, 4, 4, 3]));
