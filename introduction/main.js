// compute the distance between 2 points
points.dist = function () {
  let p1 = this[0];
  let p2 = this[1];
  let a = p1.x - p2.x;
  let b = p1.y - p2.y;
  return Math.sqrt(a * b + a * b); // 1.4142135623730951
};

// A function to compute the absolute value
function abs(x) {
  if (x >= 0) {
    return x;
  }

  return -x;
}
abs(-10); // 10
abs(10) === abs(-10); // true

// Copute the sum of the elements of an array
function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  return sum;
}
sum(primes); // 28

// Fuction to compute the factorial of a number
function factorial(n) {
  let product = 1;
  while (n) {
    product *= n;
    n--;
  }

  return product;
}
factorial(5); // 120

// Function to compute the factorial of a number with a for loop
function factorial2(n) {
  let product = 1;
  for (let i = 2; i <= n; i++) {
    product *= i;
  }

  return product;
}
factorial2(5); // 120

// Class to represent a 2D geometric point with a method that calculates the Euclidean distance between a 2D point and the origin (0,0) using the Pythagorean theorem.
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
let p = new Point(3, 4);
p.distance(); // 5

// ---------------------------------------------
function factorial(n) {
  // A function to compute factorials
  let product = 1; // Start with a product of 1
  while (n > 1) {
    // Repeat statements in {} while expr in () is true
    product *= n; // Shortcut for product = product * n;
    n--; // Shortcut for n = n - 1
  } // End of loop
  return product; // Return the product
}
