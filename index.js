var MyCalendar = function () {
  this.calendar = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  let [left, right, indx] = [0, this.calendar.length - 1, this.calendar.length];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (this.calendar[mid][0] > start) {
      indx = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (
    (indx > 0 && this.calendar[indx - 1][1] > start) ||
    (indx < this.calendar.length && this.calendar[indx][0] < end)
  ) {
    return false;
  }

  this.calendar.splice(indx, 0, [start, end]);

  return true;
};
