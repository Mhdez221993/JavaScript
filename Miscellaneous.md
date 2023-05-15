# Miscellaneous

## Toeplitz Matrix
A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has the same element.

```js
/*
For example,

[[1,2,3,4],
 [5,1,2,3],
 [6,5,1,2]]
is a Toeplitz matrix, so we should return true

Keywords: Matrix, 2D array, Nested loop, Array traversal, Diagonal elements, Indexing, Row, Column, Adjacent elements, Equality comparison
*/

function isToeplitz(arr) {
  const numRows = arr.length;
  const numcols = arr[0].length;

  for (let i = 0; i < numRows -1; i++) {
    for (let j = 0; j < numcols -1; j++) {
      if (arr[i][j] !== arr[i + 1][j + 1]) {
        return false
      }
    }
  }

  return true
}
```

#### Merging 2 Packages
The problem is to find a pair of indices [i, j] in the array arr where the weights of the items at indices i and j add up to the weight limit limit.
```js
/*
input:  arr = [4, 6, 10, 15, 16],  lim = 21

output: [3, 1] # since these are the indices of the
               # weights 6 and 15 whose sum equals to 21
*/

function getIndicesOfItemWeights(arr, limit) {
  let weightMap = new Map();

  for(let i = 0; i < arr.length; i++){
    let complement = limit - arr[i];
    if(weightMap.has(complement)) {
      return [i, weightMap.get(complement)];
    }

    weightMap.set(arr[i], i);
  }

  return [];
}

```

#### Pairs with Specific Difference
Write a function that takes an array of distinct integers and a non-negative integer k. The function should return an array of all pairs `[x, y]` in arr where `x - y = k`. If no such pairs exist, the function should return an empty array."
```js
/*
input:  arr = [0, -1, -2, 2, 1], k = 1
output: [[1, 0], [0, -1], [-1, -2], [2, 1]]

input:  arr = [1, 7, 5, 3, 32, 17, 12], k = 17
output: []
*/

function findPairsWithGivenDifference(arr, k) {
  const resultSet = new Set(arr);
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];

    if (resultSet.has(x + k)) {
      result.push([x + k, x]);
    }
  }

  return result;
}
```