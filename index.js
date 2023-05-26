var searchMatrix = function (matrix, target) {
  let left = 0;
  let right = matrix.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (matrix[mid][0] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  let row = right;
  if (row < 0) row = 0;

  left = 0;
  right = matrix[row].length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (matrix[row][mid] === target) {
      return true;
    } else if (matrix[row][mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

console.log(searchMatrix([[1], [3], [5]], 3));
