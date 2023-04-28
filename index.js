class SnapshotArray {
  constructor(n) {
    this.histories = Array(n).fill([[-1, 0]]);
    this.snap_id = 0;
  }

  get(i, val) {
    this.histories[i].push([snap_id, val]);
  }

  snap() {
    this.snap_id += 1;
    return this.snap_id - 1;
  }

  get(i, snap_id) {
    let left = 0;
    let right = this.histories[i].length - 1;
    let pos = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (this.histories[i][mid][0] <= snap_id) {
        pos = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return pos;
  }
}

const s = new SnapshotArray(5);
