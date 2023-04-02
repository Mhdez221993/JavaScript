# Utilities

## A function to compute the absolute value.
```js
function abs(x) {
  if (x >= 0) { // The if statement...
    return x; // executes this code if the comparison is true.
  } // This is the end of the if clause.
  else { // The optional else clause executes its code if
    return -x; // the comparison is false.
  } // Curly braces optional when 1 statement per clause.
} // Note return statements nested inside if/else.
abs(-10) === abs(10) // => true

```

##  Compute the sum of the elements of an array
```js
function sum(array) {
 let sum = 0; // Start with an initial sum of 0.
 for(let x of array) { // Loop over array, assigning each element to x.
 sum += x; // Add the element value to the sum.
 } // This is the end of the loop.
 return sum; // Return the sum.
}
sum(primes) // => 28: sum of the first 5 primes 2+3+5+7+11

```

##  A function to compute factorials
```js
function factorial(n) { // A function to compute factorials
  let product = 1; // Start with a product of 1
  while(n > 1) { // Repeat statements in {} while expr in () is true
    product *= n; // Shortcut for product = product * n;
    n--; // Shortcut for n = n - 1
  } // End of loop
  return product; // Return the product
}

```

## JavaScript class to represent 2D geometric points
```js
class Point { // By convention, class names are capitalized.
  constructor(x, y) { // Constructor function to initialize new instances.
    this.x = x; // This keyword is the new object being initialized.
    this.y = y; // Store function arguments as object properties.
  } // No return is necessary in constructor functions.

  distance() { // Method to compute distance from origin to point.
    return Math.sqrt( // Return the square root of x² + y².
      this.x * this.x + // this refers to the Point object on which
      this.y * this.y // the distance method is invoked.
    );
  }
}

// Use the Point() constructor function with "new" to create Point objects
let p = new Point(1, 1); // The geometric point (1,1).

// Now use a method of the Point object p
p.distance() // => Math.SQRT2

```

## Character Frequency Histograms
a Node program that reads text from standard input, computes a character frequency histogram from that text, and then prints out the histogram.
You could invoke the program like this: `node charfreq.js < corpus.txt` or ` node charfreq.js < charfreq.js`

This class extends Map so that the get() method returns the specified value instead of null when the key is not in the map
```js
class DefaultMap extends Map {
  constructor(defaultValue) {
    super(); // Invoke superclass constructor
    this.defaultValue = defaultValue; // Remember the default value
  }

  get(key) {
    if (this.has(key)) { // If the key is already in the map
      return super.get(key); // return its value from superclass.
    }
    else {
      return this.defaultValue; // Otherwise return the default value
    }
  }
}

```

This class computes and displays letter frequency histograms
```js
class Histogram {
  constructor() {
    this.letterCounts = new DefaultMap(0); // Map from letters to counts
    this.totalLetters = 0; // How many letters in all
  }

 // This function updates the histogram with the letters of text.
  add(text) {
    // Remove whitespace from the text, and convert to upper case
    text = text.replace(/\s/g, "").toUpperCase();

    // Now loop through the characters of the text
    for(let character of text) {
      let count = this.letterCounts.get(character); // Get old count
      this.letterCounts.set(character, count+1); // Increment it
      this.totalLetters++;
    }
  }

  // Convert the histogram to a string that displays an ASCII graphic
  toString() {
    // Convert the Map to an array of [key,value] arrays
    let entries = [...this.letterCounts];

    // Sort the array by count, then alphabetically
    entries.sort((a,b) => { // A function to define sort order.
      if (a[1] === b[1]) { // If the counts are the same
        return a[0] < b[0] ? -1 : 1; // sort alphabetically.
      } else { // If the counts differ
        return b[1] - a[1]; // sort by largest count.
      }
    });

    // Convert the counts to percentages
    for(let entry of entries) {
      entry[1] = entry[1] / this.totalLetters*100;
    }

    // Drop any entries less than 1%
    entries = entries.filter(entry => entry[1] >= 1);

    // Now convert each entry to a line of text
    let lines = entries.map(
      ([l,n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
    );

    // And return the concatenated lines, separated by newline characters.
    return lines.join("\n");
  }
}

```

This async (Promise-returning) function creates a Histogram object, asynchronously reads chunks of text from standard input, and adds those chunks to the histogram. When it reaches the end of the stream, it returns this histogram
```js
async function histogramFromStdin() {
  process.stdin.setEncoding("utf-8"); // Read Unicode strings, not bytes
  let histogram = new Histogram();

  for await (let chunk of process.stdin) { // Read data a 1 at time as chuck or words
    histogram.add(chunk);
  }

  return histogram;
}

```

This one final line of code is the main body of the program. It makes a Histogram object from standard input, then prints the histogram.
```js
histogramFromStdin().then(histogram => { console.log(histogram.toString()); });

```

## Calculate the area of a circule given its radius
```js
const radius = 5; // declare a const variable with value of 5
const area = Math.PI * Math.pow(radius, 2); // calculate the area by multiplying PI by the square of the circle (Math.PI * circle * circle)
console.log(area); // Output: 78.53981633974483

```

## Round a decimal number to the nearest integer
```js
const num = 3.14159; // declare a constant and assigned to a decimal number
const roundedNum = Math.round(num) // round: round a decimal up or down finding the closes interger (3.1 = 3), (3.6 = 4)
console.log(roundedNum) // output: 3

```

## Round up a number to the nearest integer
```js
const num = 3.14159; // declare a constant and assigned to a decimal number
const roundedNum = Math.ceil(num) // ceil: round a decimal up (3.1 = 4), (3.6 = 4)
console.log(roundedNum) // output: 4

```

## Round down a number to the nearest integer
```js
const num = 3.14159; // declare a constant and assigned to a decimal number
const roundedNum = Math.floor(num) // floor: round a deciaml down (3.1 = 3), (3.6 = 3)
console.log(roundedNum) // output: 3

```

## Get the absolute value of a number
```js
const num = -42 // declare a constant and assign it to integer
const absNum = Math.abs(num) // abs return a positive number or zero (-4 = 4), (0 = 0), (5 = 5)
console.log(absNum) // output: 42
```

## Find the largest number in an array
```js
const numbers = [4, 2, 3, 5, 8 , 10]; // declare a constant and assign it to an array of integers
const largestNum = Math.max(...numbers) // max compare and return the largest number
console.log(largestNum // output: 10

```

## Find the smallest number in an array
```js
const numbers = [4, 2, 3, 5, 8 , 10]; // declare a constant and assign it to an array of integers
const largestNum = Math.max(...numbers) // min compare and return the minimun number
console.log(largestNum // output: 2

```

## Generate a ramdom integer between a min adn max value
```js
function getRamdomInt(max, min) {
  min = Math.ceil(min)
  max = Math.floor(max)
  const random = Math.floor(Math.random() * (max-min+1)) + min; // generate a random number between min and max inclusive
  return random;
}

const max = 100;
const min = 0;
const ramdom = getRamdomInt(max, min); // return an interger and assign it to the constant ramdom
console.log(ramdom) // output ramdom integer from 0 to 100

```

## Calculate the circunference of a circule given its radius.
```js
function getCircunference(radius) {
  return 2 * Math.PI * radius; //  We can use the fourmula `C = 2 * π * r`
}

console.log(getCircunference(5)) // output: 31.41592653589793

```

## Calculate the exponencial function for a given value
```js
function calculateExponential(x) {
  return Math.exp(x) // we use the formula y = e^x where e is represented in JavaScript as Math.E
}

console.log(calculateExponential(2)) // output: 7.38905609893065

```

## Calculate the length of hypotenuse of a right triangle given its 2 sides
```js
function calculateHypotenuse(a, b) {
  return Math.sqrt(a * a + b * b); // we use the Pythagorean theorem c = √(a^2 + b^2), Math.sqrt return the square root of a number
}

const sideA = 3;
const sideB = 4;
const hypothenuse = calculateHypotenuse(siseA, sideB);
console.log(hypothenuse) // 5

```

## Calculate compund interes. The future value of A with and inicial value (principal) of P invested for T years at annual interes rate R, compunded N times per year
```js
function calculateFutureValue(principal, rate, years, compoundingsPerYear) {
  const n = comoundingsPerYear;
  const t = years;
  const interest = rate / n;
  const base = 1 + interest;
  const exponent n * t;
  const future = principal * Math.pow(base, exponent); // We can use the formula A = P * (1 + r/n)^(n*t)
  return principal;
}

const principal = 1000;
const annualRate = 5;
const years = 10;
const compoundingsYear = 12;
const futureValue = calculateFutureValue(principal, annualRate/100, years, compundingsYear) // we divide annualRate to get persentage like 5% = 5/100 = 0.05
console.log(futureValue) // output: 1647.0094976902803

```

## Calculate the coordinates of points on a unit  circle with a radius of 1 centered at the origin (0, 0) in a Cartesian coordinate system
```js
function calculateUnitCircleCoordinates(angle) { // angle parameter in radians
  const x = Math.cos(angle); // cos return the coseno of that angle
  const y = Math.sin(angle); // sin return the sine of that angle
  return [x, y];
}

const angle1 = Math.PI / 4; // 45 degree in radians
const [x, y] = calculateUnitCirculeCoordinates(angle1)
console.log(x.toFixed(2), y.toFixed(2)) // output: x: 0.71 and y:0.710.7

```

## Calculate the logarithm of a number with a specified base
```js
const logOf8WithBase2 = Math.log(8) / Math.log(2); // log calculate the logarithm of a given number
console.log(logOf8WithBase2) // output: 3

```

## Calculate the side length of a cube given its volument
```js
const volume = 64;
const sideLength = Math.cbrt(volume); // Math.cbrt return the cube root of a  volume (number)
console.log(sideLength); // output: 4, 4^3 = 64

```

## Calculate the length of the hypotenuse of a rigth-angled triangle with sides of length 3 and 4 units
```js
const a = 3;
const b = 4;
const hypotenuse = Math.hypot(a, b) // hypotenuse will be 5. Math.hypot uses the formula sqrt(a^2 + b^2)

```

## Calculate the distance between 2 points having x and y coordinates
```js
const x1 = 2;
const x2 = 3;
const y1 = 5;
const y2 = 7;

const distance = Math.hypot(x2 - x1, y2 - y1); // calculate distance bewteen two points
console.log(distance) // Output: 4.242640687119285

```

## Check if a number is positive, negative, or zero
```js
function checkNumber(num) {
  const sign = Math.sign(num); // return 1 if positive, -1 if negative or 0 if zero
  if(sign === 1) {
    console.log(`${num} is positive`)
  } else if( sign === -1) {
    console.log(`${num} is negative`)
  } else {
    console.log(`${num} is zero`)
  }
}

```

## Let's say we have 2 32-bit integers we want to hash
```js
function hash(a, b) {
  cosnt product = Math.imul(a, b) // Math.emul multiplay a * b as 2 32-bit and obtein 64-bits.
  return (product & 0xffffffff) ^ (product >>> 32); // (& 0xffffffff) operator extract lowest 32-bits, (>>> 32) obtain the highest 32 bits, (^) combines the lowers and highest
  // this resulting number is a 32-bits hashed valued that is less likde to produce collitions
}

```

## Count the numbers of leading zeros in 32-bit number
```js
const leadingZeros = Math.clz32(12); // Count the numbers of leading zeros in the representation of 12 in binary like this: 00000000000000000000000000001100
console.log(leadingZeros); // Output: 28

```

## Remove any fractional digit from a number
```js
let
let x = 3.14159265359;
let y = -0.123456789;

console.log(Math.trunc(x)); // Output: 3
console.log(Math.trunc(y)); // Output: 0
```

## Calculat the square root of a number with high precision rounded to 32-bits
```js
const x = 0.1 + 0.2; // the result is 0.30000000000000004 and not 0.3 due to floating point imprecision
const squareRoot = Math.fround(Math.sqrt(x)); // round the result of Math.sqrt(x) to a 32-bit floating point.
console.log(squareRoot); // 0.4690415859222412

```

## Calculate the curvature of a hanging chain or cuble under gravity
```js
const w = 10; // weight per unit length of the chain
const L = 100; // total length of the chain
const x = 50; // distance along the chain
const height = w / Math.sinh(L / (2 * w)) * (Math.cosh(L / (2 * w)) - Math.cosh(x / (2 * w))); // We use h(x) = (w/L) * (cosh(L/(2w)) - cosh(x/(2w))) to calculate the hight of the chain

console.log(height); // output: 68.6373514649773

```

## Calculate the natural logarithm of a number plus the square root of that number plus one
```js
const x = 2;
const y = Math.asinh(x); // we use Math.log(x + Math.sqrt(x*x + 1))

console.log(y); // 1.4436354751788103

```

## Find the max value in an array, can be applied to find the min value too
```js
function getMaxValue(arr) {
  let max = -Infinity;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i]
    }
  }

  return max
}

const maxValue = getMaxValue([3, 3, 4, 8, 10]);

```

## Find the approximate equality of 2 floating point
```js
function approximateEqual(a, b) {
  return Math.abs(a-b) < Number.EPSILON; // return true if are approximately equal, theier difference is less tha Math.EPSILON
}

approximateEqual(0.1 + 0.2, 0.3); // Output: 3
approximateEqual(0.1 + 0.2, 0.31); // Output: false

```

## Check if a given numbe is whithing a safe range
```js
function isSafeRange(num) { // take a interger as parameter
  return Number.isInteger(num) &&  num >= Number.MIN_SAFE_INTEGER && num <= Number.MAX_SAFE_INTEGER; // return true is num is in between the MIN and MAX interger
}
```