// Time complexity O(log(n))
// Space complexity O(1)

function squareRoot(n) {
  if (n === 0) {
    return 0;
  }

  let left = 1;
  let right = n;
  let ans = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid === n) {
      return mid;
    } else if (mid * mid > n) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans - 1;
}
