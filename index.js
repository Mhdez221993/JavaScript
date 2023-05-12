function uniqueArray(array) {
  let set = new Set([...array]);
  return [...set];
}

console.log(uniqueArray([1, 2, 3, 3, 3]));
