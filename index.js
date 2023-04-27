let poli = "racecar";

function isPoli(poli) {
  let left = 0;
  let right = poli.length - 1;

  while (left <= right) {
    if (poli[left] !== poli[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPoli(poli));
