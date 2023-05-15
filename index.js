function findSolution(target) {
  function find(curr, history) {
    if (curr === target) {
      return history;
    } else if (curr > target) {
      return null;
    } else {
      return (
        find(curr + 5, `(${history} + 5)`) || find(curr * 3, `(${history} * 3)`)
      );
    }
  }

  return find(1, "1");
}

console.log(findSolution(24));
