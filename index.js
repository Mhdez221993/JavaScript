let calendar = [
  [10, 20],
  [30, 40],
];

function book(start, end) {
  let left = 0;
  let right = calendar.length - 1;
  let index = calendar.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (calendar[mid][0] > start) {
      index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  console.log(index);

  if (
    (index > 0 && calendar[index - 1][1] > start) ||
    (index < calendar.lenght && calendar[index][0] < end)
  ) {
    return false;
  }

  calendar.splice(index, 0, [start, end]);
}

let books = [[20, 30]];
for (let b of books) {
  book(...b);
}

console.log(calendar);
