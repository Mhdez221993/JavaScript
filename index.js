class TimeMap {
  constructor() {
    this.time_base = {};
  }

  set(key, val, time) {
    if (!this.time_base[key]) {
      this.time_base[key] = [];
    }

    this.time_base[key].push([time, val]);
  }

  get(key, time) {
    if (!this.time_base[key]) {
      return "";
    }

    let left = 0;
    let right = this.time_base[key].length - 1;
    let time_prev = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 1);

      if (this.time_base[key][mid][0] <= time) {
        time_prev = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    if (time_prev === -1) return "";

    return this.time_base[key][time_prev][1];
  }

  print() {
    console.log(this.time_base);
  }
}

const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
timeMap.get("foo", 1);
timeMap.get("foo", 3);
timeMap.set("foo", "bar2", 4);
timeMap.get("foo", 4);
console.log(timeMap.get("foo", 5));
