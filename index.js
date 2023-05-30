var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = 1000000000;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (can_finish_eating(piles, h, mid)) right = mid;
    else left = mid + 1;
  }

  return right;
};

function can_finish_eating(piles, h, k) {
  let hours_used = 0;
  for (let pile of piles) hours_used += Math.ceil(pile / k);
  return hours_used <= h;
}
