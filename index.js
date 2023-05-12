function inRange(value, startParam, endParam) {
  let start = startParam;
  let end = endParam;
  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (start < end) {
    return value >= start && value < end;
  }

  return value >= end && value < start;
}

function inRange(value, start, end) {
  if (!end) {
    end = start;
    start = 0;
  }

  return value >= Math.min(start, end) && value < Math.max(start, end);
}
