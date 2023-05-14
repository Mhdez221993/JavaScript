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