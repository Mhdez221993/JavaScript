var minEatingSpeed = function (piles, h) {
  let l = 1;
  let r = 1000000000;
  let ans = -1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (can_finish_eating(piles, h, mid)) {
      ans = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return ans;
};

function can_finish_eating(piles, h, k) {
  let hours_used = 0;

  for (let pile of piles) {
    hours_used += Math.ceil(pile / k);
  }

  return hours_used <= h;
}

let piles = [3, 6, 7, 11];
let h = 8;

console.log(minEatingSpeed(piles, h));
