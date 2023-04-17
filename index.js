var isPerfectSquare = function (num) {
  let min = 1;
  let max = num;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (mid * mid === num) {
      return true;
    } else if (mid * mid < num) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return false;
};
console.log(isPerfectSquare(9));
