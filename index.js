var isPalindrome = function (s) {
  let newS = s.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();

  let left = 0;
  let right = newS.length - 1;
  while (left <= right) {
    if (newS[left] !== newS[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
