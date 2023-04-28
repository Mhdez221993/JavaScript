function newspapersSplit(newspapersReadTimes, numCoworkers) {
  let low = Math.max(...newspapersReadTimes);
  let high = newspapersReadTimes.reduce((a, b) => a + b, 0);
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (feasible(newspapersReadTimes, numCoworkers, mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

function feasible(newspapersReadTimes, numCoworkers, limit) {
  let [time, numWorkers] = [0, 0];

  for (let readTime of newspapersReadTimes) {
    if (time + readTime > limit) {
      numWorkers += 1;
      time = 0;
    }
    time += readTime;
  }

  if (time !== 0) {
    numWorkers += 1;
  }

  return numWorkers <= numCoworkers;
}

let arr = [7, 2, 5, 10, 8];
let ans = newspapersSplit(arr, 2);
console.log(ans);
