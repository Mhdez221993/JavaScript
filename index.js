function findGrantsCap(grantsArray, newBudget) {
  const n = grantsArray.length;
  let lower = 0;
  let upper = Math.max(...grantsArray);

  while (lower <= upper) {
    const mid = Math.floor((lower + upper) / 2);
    const adjustedBudget = grantsArray.reduce(
      (sum, grant) => sum + Math.min(grant, mid),
      0
    );

    if (adjustedBudget === newBudget) {
      return mid;
    } else if (adjustedBudget < newBudget) {
      lower = mid + 1;
    } else {
      upper = mid - 1;
    }
  }

  return lower;
}

let grantsArray = [2, 100, 50, 120, 167];
const newBudget = 400;
console.log(findGrantsCap(grantsArray, newBudget)); // 128

let grantsArray2 = [21, 100, 50, 120, 130, 110]; // 23.8
const newBudget2 = 140;
console.log(findGrantsCap(grantsArray2, newBudget2));
