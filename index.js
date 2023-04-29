function platesBetweenCandles(s, queries) {
  let candles = [];
  let res = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "|") {
      candles.push(i);
    }
  }

  for (let [qleft, qright] of queries) {
    let left_pos = -1;
    let right_pos = -1;

    let left = 0;
    let right = candles.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (candles[mid] >= qleft) {
        left_pos = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    left = 0;
    right = candles.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (candles[mid] <= qright) {
        right_pos = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    if (left_pos !== -1 && right_pos !== -1 && left_pos < right_pos) {
      res.push(candles[right_pos] - candles[left_pos] - (right_pos - left_pos));
    } else {
      res.push(0);
    }
  }

  return res;
}

let s = "**|**|***|";
let queries = [
  [2, 5],
  [5, 9],
];

console.log(platesBetweenCandles(s, queries));
