function pilesOfBananas(piles, h) {
  let low = 1;
  let high = 1000000000;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (feasible(piles, h, mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

function feasible(piles, h, k) {
  let hours_used = 0;
  for (let p of piles) {
    hours_used += p;
  }

  hours_used = Math.ceil(hours_used / k);

  return hours_used <= h;
}

let arr = [3, 6, 7, 11];
let ans = pilesOfBananas(arr, 8);
console.log(ans);
