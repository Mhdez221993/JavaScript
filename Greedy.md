# Greedy

#### Award Budget Cuts
 Find the maximum cap on research grants such that the least number of recipients is affected and the new budget constraint is met. We are given the original grant amounts in the array grantsArray and the reduced budget newBudget.

 ```js
/*
input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190

output: 47 # and given this cap the new grants array would be
           # [2, 47, 47, 47, 47]. Notice that the sum of the
           # new grants is indeed 190
*/

function findGrantsCap(grantsArray, newBudget) {
  let n = grantsArray.length;
  grantsArray.sort((a, b) => a - b);

  let amountBudgetLeft = newBudget;
  let countGrantsLeft = n;

  for (let i = 0; i < n; i++) {
    let moneyReq = grantsArray[i] * countGrantsLeft;
    if (moneyReq >= amountBudgetLeft) {
      let cap = amountBudgetLeft / countGrantsLeft;
      return cap;
    }
    amountBudgetLeft -= grantsArray[i];
    countGrantsLeft--;
  }

  return newBudget;
}
 ```