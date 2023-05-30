var SnapshotArray = function (len) {
  this.snapshot = Array.from({ length: len }, () => [[-1, 0]]);
  this.snap_id = 0;
};

SnapshotArray.prototype.set = function (index, val) {
  this.snapshot[index].push([this.snap_id, val]);
};

SnapshotArray.prototype.snap = function () {
  this.snap_id += 1;
  return this.snap_id - 1;
};

SnapshotArray.prototype.get = function (index, snap_id) {
  let left = 0;
  let right = this.snapshot[index].length - 1;
  let pos = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (this.snapshot[index][mid][0] <= snap_id) {
      left = mid + 1;
      pos = mid;
    } else {
      right = mid - 1;
    }
  }

  return this.snapshot[index][pos][1];
};
