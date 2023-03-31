# Introduction to JavaScript

## High-level language
JavaScript is considered a high-level language because it is designed to be human-readable and easy to understand, with syntax and structure that is similar to natural language. This is in contrast to low-level languages like assembly language, which is more difficult to read and write and requires a deeper understanding of computer architecture.

## Dynamic language
JavaScript is a dynamic language because it does not require explicit data types to be declared before variables are used. Instead, data types are determined automatically at runtime, making it easier to write code quickly and iterate on it more easily.

## Interpreted language
JavaScript is an interpreted language, which means that it is executed directly by a browser or other software environment, rather than being compiled into machine code first. This makes it easier to write and test code quickly, since changes can be made and tested in real-time.

## Object-oriented programming (OOP)
JavaScript is well-suited to object-oriented programming, which is a programming paradigm that is based on the concept of objects, which can contain data and behavior (methods). OOP allows for encapsulation of data and behavior, inheritance of properties and methods, and polymorphism (the ability of objects to take on different forms).

## Functional programming (FP)
JavaScript is also well-suited to functional programming, which is a programming paradigm that is based on the concept of functions as the primary building blocks of programs. FP emphasizes immutability (data that cannot be changed), pure functions (functions that do not have side effects and always return the same result for a given input), and higher-order functions (functions that can take other functions as arguments or return functions as results).

## History
JavaScript (JS) was created by Brendan Eich in 1995 while working at Netscape Communications. Initially called Mocha, it was soon renamed to LiveScript and finally to JavaScript. It was designed as a scripting language to add interactivity to web pages, complementing HTML and CSS.
The language gained widespread adoption and evolved through several versions. ECMAScript (ES) became its standardized version, with ES5 and ES6 (also called ES2015) as major milestones. ES6, released in 2015, introduced significant features, such as classes, arrow functions, and promises, shaping modern JavaScript development.

## Variables
A variable in JavaScript is a named container that stores a value, which can be of any data type, such as a number, string, boolean, or object. Variables are used to hold data that can be referenced and manipulated throughout a program.
To declare a variable in JavaScript, you use the `let`, `const`, or `var` keyword, followed by the variable name, and optionally, an assignment operator `(=)` to assign an initial value to the variable.

```js
let x; // Declare a variable named x
// Values can be assigned to variables with an = sign
x = 0; // Now the variable x has the value 0
x // => 0: A variable evaluates to its value.
// JavaScript supports several types of values
x = 1; // Numbers.
x = 0.01; // Numbers can be integers or reals.
x = "hello world"; // Strings of text in quotation marks.
x = 'JavaScript'; // Single quote marks also delimit strings.
x = true; // A Boolean value.
x = false; // The other Boolean value.
x = null; // Null is a special value that means "no value."
x = undefined; // Undefined is another special value like null.

```

Two other very important types that JavaScript programs can manipulate are objects and arrays.
```js
// JavaScript's most important datatype is the object.
// An object is a collection of name/value pairs, or a string to value map.
let book = { // Objects are enclosed in curly braces.
 topic: "JavaScript", // The property "topic" has value "JavaScript."
 edition: 7 // The property "edition" has value 7
}; // The curly brace marks the end of the object.
// Access the properties of an object with . or []:
book.topic // => "JavaScript"
book["edition"] // => 7: another way to access property values.
book.author = "Flanagan"; // Create new properties by assignment.
book.contents = {}; // {} is an empty object with no properties.

// Conditionally access properties with ?. (ES2020):
book.contents?.ch01?.sect1 // => undefined: book.contents has no ch01 property.

```

```js
// JavaScript also supports arrays (numerically indexed lists) of values:
let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].
primes[0] // => 2: the first element (index 0) of the array.
primes.length // => 4: how many elements in the array.
primes[primes.length-1] // => 7: the last element of the array.
primes[4] = 9; // Add a new element by assignment.
primes[4] = 11; // Or alter an existing element by assignment.
let empty = []; // [] is an empty array with no elements.
empty.length // => 0
// Arrays and objects can hold other arrays and objects:
let points = [
  // An array with 2 elements.
  { x: 0, y: 0 }, // Each element is an object.
  { x: 1, y: 1 },
];
let data = {
  // An object with 2 properties
  trial1: [
    [1, 2],
    [3, 4],
  ], // The value of each property is an array.
  trial2: [
    [2, 3],
    [4, 5],
  ], // The elements of the arrays are arrays.
};

```

## statement
In JavaScript, a statement is a complete line of code that performs a specific action, such as declaring a variable, assigning a value to a variable, calling a function, or looping over an array. Statements are executed in sequence, from top to bottom, and can include expressions, which are evaluated to produce a value.
```js
// Variable declaration statement
let x;

// Variable assignment statement
x = 5;

// Function call statement
console.log("Hello, world!");

// Conditional statement (if/else)
if (x > 0) {
  console.log("x is positive");
} else {
  console.log("x is non-positive");
}

// Loop statement (for loop)
for (let i = 0; i < 10; i++) {
  console.log(i);
}

```

## expression
An expression in JavaScript is any piece of code that can be evaluated to a value. It can consist of variables, operators, literals, and function calls. Expressions can be used to assign values to variables, pass arguments to functions, and perform calculations or comparisons.
```js
// Operators act on values (the operands) to produce a new value.
// Arithmetic operators are some of the simplest:
3 + 2 // => 5: addition
3 - 2 // => 1: subtraction
3 * 2 // => 6: multiplication
3 / 2 // => 1.5: division
points[1].x - points[0].x // => 1: more complicated operands also work
"3" + "2"// => "32": + adds numbers, concatenates strings

// JavaScript defines some shorthand arithmetic operators
let count = 0; // Define a variable
count++; // Increment the variable
count--; // Decrement the variable
count += 2; // Add 2: same as count = count + 2;
count *= 3; // Multiply by 3: same as count = count * 3;
count // => 6: variable names are expressions, too.

// Equality and relational operators test whether two values are equal,
// unequal, less than, greater than, and so on. They evaluate to true or false.
let x = 2, y = 3; // These = signs are assignment, not equality tests
x === y // => false: equality
x !== y // => true: inequality
x < y // => true: less-than
x <= y // => true: less-than or equal
x > y // => false: greater-than
x >= y // => false: greater-than or equal
"two" === "three" // => false: the two strings are different
"two" > "three" // => true: "tw" is alphabetically greater than "th"
false === (x > y) // => true: false is equal to false

// Logical operators combine or invert boolean values
(x === 2) && (y === 3) // => true: both comparisons are true. && is AND
(x > 3) || (y < 3) // => false: neither comparison is true. || is OR
!(x === y) // => true: ! inverts a boolean value

```

A function is a named and parameterized block of JavaScript code that you define once, and can then invoke over and over again.
```js
// Functions are parameterized blocks of JavaScript code that we can invoke.
function plus1(x) {
  // Define a function named "plus1" with parameter "x"
  return x + 1; // Return a value one larger than the value passed in
} // Functions are enclosed in curly braces
plus1(y); // => 4: y is 3, so this invocation returns 3+1
let square = function (x) {
  // Functions are values and can be assigned to vars
  return x * x; // Compute the function's value
}; // Semicolon marks the end of the assignment.
square(plus1(y));

```

In ES6 and later, there is a shorthand syntax for defining functions. This concise syntax uses => to separate the argument list from the function body, so functions defined this way are known as arrow functions.
```js
const plus1 = x => x + 1; // The input x maps to the output x + 1
const square = x => x * x; // The input x maps to the output x * x
plus1(y) // => 4: function invocation is the same
square(plus1(y)) // => 16
```

When we use functions with objects, we get methods:
```js
// When functions are assigned to the properties of an object, we call
// them "methods." All JavaScript objects (including arrays) have methods:
let a = []; // Create an empty array
a.push(1,2,3); // The push() method adds elements to an array
a.reverse(); // Another method: reverse the order of elements

// We can define our own methods, too. The "this" keyword refers to the object
// on which the method is defined: in this case, the points array from earlier.
points.dist = function () {
  // Define a method to compute distance between points
  let p1 = this[0]; // First element of array we're invoked on
  let p2 = this[1]; // Second element of the "this" object
  let a = p2.x - p1.x; // Difference in x coordinates
  let b = p2.y - p1.y; // Difference in y coordinates
  return Math.sqrt(
    a * a + // The Pythagorean theorem
      b * b
  ); // Math.sqrt() computes the square root
};
points.dist(); // => Math.sqrt(2): distance between our 2 points
```

## functions whose bodies demonstrate common JavaScript control structure statements
JavaScript statements include conditionals and loops using the syntax of C, C++, Java, and other languages.

A function to compute the absolute value.
```js
function abs(x) {
  // The if statement...
  if (x >= 0) {
    return x; // executes this code if the comparison is true.
  } // This is the end of the if clause.
  else {
    // The optional else clause executes its code if
    return -x; // the comparison is false.
  } // Curly braces optional when 1 statement per clause.
} // Note return statements nested inside if/else.
abs(-10) === abs(10); // => true
```

Compute the sum of the elements of an array
```js
function sum(array) {
  let sum = 0; // Start with an initial sum of 0.
  for (let x of array) {
    // Loop over array, assigning each element to x.
    sum += x; // Add the element value to the sum.
  } // This is the end of the loop.
  return sum; // Return the sum.
}
sum(primes); // => 28: sum of the first 5 primes 2+3+5+7+11
```

A function to compute factorials
```js
function factorial(n) {
  let product = 1; // Start with a product of 1
  while (n > 1) {
    // Repeat statements in {} while expr in () is true
    product *= n; // Shortcut for product = product * n;
    n--; // Shortcut for n = n - 1
  } // End of loop
  return product; // Return the product
}
factorial(4) // => 24: 1*4*3*2
```

A function to compute factorials with for loop
```js
function factorial2(n) {
 let i, product = 1; // Start with 1
 for(i=2; i <= n; i++) // Automatically increment i from 2 up to n
 product *= i; // Do this each time. {} not needed for 1-line loops
 return product; // Return the factorial
}
factorial2(5) // => 120: 1*2*3*4*5
```

Class to represent a 2D geometric point with a method that calculates the Euclidean distance between a 2D point and the origin (0,0) using the Pythagorean theorem.

```js
class Point {
  // By convention, class names are capitalized.
  constructor(x, y) {
    // Constructor function to initialize new instances.
    this.x = x; // This keyword is the new object being initialized.
    this.y = y; // Store function arguments as object properties.
  } // No return is necessary in constructor functions.

  distance() {
    // Method to compute distance from origin to point.
    return Math.sqrt(
      // Return the square root of x² + y².
      this.x * this.x + // this refers to the Point object on which
        this.y * this.y // the distance method is invoked.
    );
  }
}
// Use the Point() constructor function with "new" to create Point objects
let p = new Point(1, 1); // The geometric point (1,1).
// Now use a method of the Point object p
p.distance(); // => Math.SQRT2
```

## Character Frequency Histograms
 This Node program reads text from standard input, computes the frequency of each letter in that text, and displays a histogram of the most frequently used characters. It requires Node 12 or higher to run.

 In a Unix-type environment you can invoke the program like this:` node charfreq.js < corpus.txt`

![char_fre_histograma](https://user-images.githubusercontent.com/67757001/229183622-47dfd740-2826-42c4-a983-1962d4045097.PNG)

```js
// This class extends Map so that the get() method returns the specified value instead of null when the key is not in the map
class DefaultMap extends Map {
  constructor(defaultValue) {
    super(); // Invoke superclass constructor
    this.defaultValue = defaultValue; // Remember the default value
  }
  get(key) {
    if (this.has(key)) {
      // If the key is already in the map
      return super.get(key); // return its value from superclass.
    } else {
      return this.defaultValue; // Otherwise return the default value
    }
  }
}
// This class computes and displays letter frequency histograms
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
    for (let character of text) {
      let count = this.letterCounts.get(character); // Get old count
      this.letterCounts.set(character, count + 1); // Increment it
      this.totalLetters++;
    }
  }
  // Convert the histogram to a string that displays an ASCII graphic
  toString() {
    // Convert the Map to an array of [key,value] arrays
    let entries = [...this.letterCounts];
    // Sort the array by count, then alphabetically
    entries.sort((a, b) => {
      // A function to define sort order.
      if (a[1] === b[1]) {
        // If the counts are the same
        return a[0] < b[0] ? -1 : 1; // sort alphabetically.
      } else {
        // If the counts differ
        return b[1] - a[1]; // sort by largest count.
      }
    });
    // Convert the counts to percentages
    for (let entry of entries) {
      entry[1] = (entry[1] / this.totalLetters) * 100;
    }
    // Drop any entries less than 1%
    entries = entries.filter((entry) => entry[1] >= 1);
    // Now convert each entry to a line of text
    let lines = entries.map(
      ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
    );
    // And return the concatenated lines, separated by newline characters.
    return lines.join("\n");
  }
}
// This async (Promise-returning) function creates a Histogram object,
// asynchronously reads chunks of text from standard input, and adds those chunks to
// the histogram. When it reaches the end of the stream, it returns this histogram
async function histogramFromStdin() {
  process.stdin.setEncoding("utf-8"); // Read Unicode strings, not bytes
  let histogram = new Histogram();
  for await (let chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}

// This one final line of code is the main body of the program.
// It makes a Histogram object from standard input, then prints the histogram.
histogramFromStdin().then((histogram) => {
  console.log(histogram.toString());
});

```
