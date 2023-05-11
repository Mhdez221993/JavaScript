function clamp(value, lower, upper) {
  if (value < lower) {
    return lower;
  } else if (value > upper) {
    return upper;
  } else {
    return value;
  }
}

console.log(clamp(-10, -5, 5));
console.log(clamp(10, -5, 5));
console.log(clamp(1, -5, 5));
