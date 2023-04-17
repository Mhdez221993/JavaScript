const readline = require("readline");

function findBoundary(arr) {
  // console.log(arr);
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (arr[mid] && (arr[mid - 1] === false || mid === 0)) return mid;

    if (arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

function splitWords(s) {
  return s === "" ? [] : s.split(" ");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Enter a list of true/false values separated by spaces: ",
  (input) => {
    const arr = splitWords(input).map((v) => v === "true");
    const res = findBoundary(arr);
    console.log(res);
    rl.close();
  }
);
