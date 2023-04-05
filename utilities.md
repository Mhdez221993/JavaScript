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

## Calculate an aritmetic operation using floating-point number, consider the rounding error
```js
function roundToDecimalPlaces(number, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces); // compute the factor used to multiply the number
  return Math.round(number * factor) / factor; // round the number to the specified number of decimal places
}
s

// Round the values before performing any calculations
const x = roundToDecimalPlaces(0.3 - 0.2, 2); // round to 2 decimal places
const y = roundToDecimalPlaces(0.2 - 0.1, 2); // round to 2 decimal places

// Compare the values
console.log(x === y); // true
console.log(x === 0.1); // true
console.log(y === 0.1); // true
```

## Bubble Sort
Compare adjacent elements and swaps then if thery are in the wrong order
```js
// The outer loop runs 4 times
[4, 3, 2, 1] // initial array

// The first time
[4, 3, 2] 1  // Compare 4 and 3, swap
[3, 4, 2] 1  // Compare 4 and 2, swap
[3, 2, 4] 1  // Compare 4 and 1, swap

// second time
[3, 2, 4, 1]
[3, 2] 4, 1  // Compare 3 and 2, swap
[2, 3] 4, 1  // No swap needed (3 and 4 are in the correct order)

// third time
[2, 3, 4, 1]
[2] 3, 4, 1  // No swap needed (2 and 3 are in the correct order)

function bubbleSort(arr) { // bubleSort takes an array as parameter
  const len = arr.length; // get the lenght of arr
  let swapped; // help optimize, if during the first iteration we don't swap the array is sorted

  for(let i = 0; i < len; i++) { // loop from 0 to the leng of arr
    swapped = false;
    for(let j = 0; j < len -i -1; j++) { // we loop from 0 to the end but this time we decrase by i-1, this esure we don't iterate over already sorted elements
      if(arr[j] > arr[j+1]) { // check if the current element is graiter that the next
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]] // swap the current element with the next
        swapped = true;
      }
    }

    if(!swapped) { // if not swaps were made during the inner loop, the array is sorted
      break;
    }
  }

  return arr; // return the sorted array
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr)); // [11, 12, 22, 25, 34, 64, 90]

```

## Merge sort
A sorting algorithm that divides the array into smaller arrays an then combines then back into a sorted array
```js
                      [64, 34, 25, 12, 22, 11, 90]
                      /                          \
          [64, 34, 25]                          [12, 22, 11, 90]
         /          \                            /            \
      [64]     [34, 25]                     [12, 22]        [11, 90]
             /      \                        /    \          /    \
          [34]     [25]                   [12]   [22]      [11]  [90]

function mergeSort(arr) { // input array
  if (arr.length <= 1) { // if the array has less than 2 element is sorted
    return arr;
  }

  const mid = Math.floor(arr.length / 2); // get the mindle of the array
  const left = mergeSort(arr.slice(0, mid)); // recursively call mergeSort with half of the arr from 0 to mid -1
  const right = mergeSort(arr.slice(mid)); // recursively call mergeSort with half of the arr from mid to end
  return merge(left, right); // call merge with the sorted left and right halves
}

function merge(left, right) { // takes in 2 sorted arrays
  const result = [];
  let i = 0; // will use i to iterate over left
  let j = 0; // will use j to iterate over right
  while(i < left.length && j < right.length) { // loop till i & j are withing the bounds of their array
    if(left[i] < right[j]) { // compare both current elements
      result.push(left[i]); //  push the current element of lefth
      i++ // incremtn i to move to the next element in left array
    } else { // if the element from left is not less than the element from rigth
      result.push(right[j]); // push rigth[i]
      j++ // increse i to the next element in rigth
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j)); // one of the arrays (left or right) migth have remaining element, concatenate them to the result
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(mergeSort(arr)); // [11, 12, 22, 25, 34, 64, 90]

```

## Quick Sort
A sorting algorithm that picks a pivot element and partition the array around the pivot
```js
                              [64, 34, 25, 12, 22, 11, 90]
                             /                          \
          [34, 25, 12, 22, 11]                          [90]
         /                   \
  [25, 12, 22, 11]            [34]
     /          \
[12, 22, 11]     [25]
  /      \
[11]     [12, 22]
       /     \
     [12]    [22]

function quickSort(arr) {
  if (arr.length <= 1) { // if there has 1 element return
    return arr;
  }

  const pivot = arr[0]; // first element choosen as pivot
  const left = []; // this array will store elements less than pivot
  const right = []; // this array will sotre elements graiter than pivot

  for (let i = 1; i < arr.length; i++) { // iterate over arr starting from index 1
    if (arr[i] < pivot) { // compare if the curr element is less than pivot
      left.push(arr[i]); // push it to left
    } else { // if the curr element is grater than pivot
      right.push(arr[i]); // push it to right
    }
  }

  return quickSort(left).concat(pivot, quickSort(right)); // recursively call quickSort on left & right arrys, and concatenate pivot in bewteen
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(quickSort(arr)); // [11, 12, 22, 25, 34, 64, 90]

```

## Binary Search
A searching algorithm that search for an element in a sorted array by repeately divind the search interval in half.
arr = [11, 12, 22, 25, 34, 64, 90] and searching for the target value 34
```js

[11, 12, 22, 25, 34, 64, 90]
 left       mid        right

[11, 12, 22, 25, 34,  64,  90]
                left mid right

[11, 12, 22, 25, 34, 64, 90]
                left
                mid
                right

function binarySearch(arr, target) { // array and target to search for in the array
  let left = 0; // represent the left boundary of the sarch area, initilaized to the first index
  let right = arr.length -1; // represent the right boundary of the search area, initialized to the last index

  while(left <= right) { // search till the left boundary is less or equal to the right one
    const mid = Math.floor((left + right) / 2); // calculate the midle index by taking the average of left + ringth
    if(arr[mid] === target) { // check if the element at middle index is eqaul to the target
      return mid; // return the index of the found target value
    } else if(arr[mid] < target) { // if the value at middle index is less than the target, the target must be in the right half of the array
      left = mid+1; // update left boundary to start now from the mid index plus one
    } else { // if mid index value is grater than the target, the target must be in the left side of the array
      right = mid -1; // update right boundary to start from mid -1
    }
  }

  return -1; // if we don't find the target
}

const arr = [11, 12, 22, 25, 34, 64]
binarySearch(arr, 34);

```

## Linear search
A searching algorithm that searches for an element in an array by iterating one by one in order for example:
array = [11, 12, 22, 25, 34, 64, 90] and searching for the target = 25
```js
[11, 12, 22, 25, 34, 64, 90]
  i

[11, 12, 22, 25, 34, 64, 90]
      i

[11, 12, 22, 25, 34, 64, 90]
          i

[11, 12, 22, 25, 34, 64, 90]
              i (found) // when i = 3

function linearSearch(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target) {
      return i;
    }
  }

  return -1;
}

const arr = [11, 12, 22, 25, 34, 64, 90];
console.log(linearSearch(arr, 25)); // 3

```

## Selection Sort
A sorting algorith that repeatedly select the smallest element from the unsorted portion of the array and places it at the begining of the sorded portion.

```js

```