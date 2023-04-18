function minimumTime(readTime, numWorkers) {
  let l = Math.max(...readTime);
  let r = readTime.reduce((a, b) => a + b, 0);

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    let workers = 1;
    let time = 0;

    for (let i = 0; i < readTime.length; i++) {
      if (time + readTime[i] > mid) {
        workers++;
        time = 0;
      }
      time += readTime[i];
    }

    if (workers <= numWorkers) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
}

let newspapers_read_times = [7, 2, 5, 10, 8];
let num_coworkers = 2;

console.log(minimumTime(newspapers_read_times, num_coworkers));
