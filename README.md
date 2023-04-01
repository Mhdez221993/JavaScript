# JavaScript
Welcome to my JavaScript notes and challenges repository! As I embark on my journey to becoming a better web developer, I will be documenting my progress by taking notes and completing various coding challenges related to JavaScript.

## Strategies for taking effective notes

* Skim the chapter first: This will give you a roadmap for your note-taking process.
* Use a consistent note-taking method: Cornell Method, the Outline Method, or the Mind Mapping Method.
* Write down key concepts and definitions
* Break down complex concepts
* Include code examples and explanations
* Summarize and paraphrase: Instead of copying text verbatim, paraphrase the information in your own words
* Add visual elements: Use diagrams, flowcharts, or other visual aids to represent programming concepts and structures.
* Review and revise: Periodically review and revise your notes
* Create a glossary
* Practice and apply: To reinforce your understanding of the material, practice writing code and working through programming exercises related to the topics covered in the book.

# Introduction
* The browser, the primary host environment for JavaScript, enables developers to receive input from the user via mouse and keyboard events and to output HTML and CSS.
* Another host environment for JavaScript is Node.js, which allows developers to read and write files, send and receive data over the network, and create and serve HTTP requests.


##  Exploring JavaScript
* You can write JavaScript in the browser or in the terminal with a REPL, also with text editor like VS Code.

## A Tour of JavaScript

A variable is a symbolic name for a value.
```js
// Variables are declared with the let keyword:
let x; // Declare a variable named x.

// Values can be assigned to variables with an = sign
x = 0; // Now the variable x has the value 0
x // => 0: A variable evaluates to its value.

```

JavaScript supports several types of values
```js
x = 1; // Numbers.
x = 0.01; // Numbers can be integers or reals.
x = "hello world"; // Strings of text in quotation marks.
x = 'JavaScript'; // Single quote marks also delimit strings.
x = true; // A Boolean value.
x = false; // The other Boolean value.
x = null; // Null is a special value that means "no value."
x = undefined; // Undefined is another special value like null.

```

JavaScript's most important datatype is the object.
```js
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

JavaScript also supports arrays (numerically indexed lists) of values:
```js
let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].
primes[0] // => 2: the first element (index 0) of the array.
primes.length // => 4: how many elements in the array.
primes[primes.length-1] // => 7: the last element of the array.
primes[4] = 9; // Add a new element by assignment.
primes[4] = 11; // Or alter an existing element by assignment.
let empty = []; // [] is an empty array with no elements.
empty.length // => 0

```

Arrays and objects can hold other arrays and objects:
```js
let points = [ // An array with 2 elements.
 {x: 0, y: 0}, // Each element is an object.
 {x: 1, y: 1}
];
let data = { // An object with 2 properties
 trial1: [[1,2], [3,4]], // The value of each property is an array.
 trial2: [[2,3], [4,5]] // The elements of the arrays are arrays.
};

```

Operators act on values (the operands) to produce a new value.
Arithmetic operators are some of the simplest:
```js
3 + 2 // => 5: addition
3 - 2 // => 1: subtraction
3 * 2 // => 6: multiplication
3 / 2 // => 1.5: division
points[1].x - points[0].x // => 1: more complicated operands also work
"3" + "2" // => "32": + adds numbers, concatenates strings
```

 JavaScript defines some shorthand arithmetic operators
```js
let count = 0; // Define a variable
count++; // Increment the variable
count--; // Decrement the variable
count += 2; // Add 2: same as count = count + 2;
count *= 3; // Multiply by 3: same as count = count * 3;
count // => 6: variable names are expressions, too.

```

 Equality and relational operators test whether two values are equal, unequal, less than, greater than, and so on. They evaluate to true or false.
 ```js
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

 Functions are parameterized blocks of JavaScript code that we can invoke.
 ```js
function plus1(x) { // Define a function named "plus1" with parameter "x"
 return x + 1; // Return a value one larger than the value passed in
} // Functions are enclosed in curly braces
plus1(y) // => 4: y is 3, so this invocation returns 3+1

let square = function(x) { // Functions are values and can be assigned to vars
 return x * x; // Compute the function's value
}; // Semicolon marks the end of the assignment.
square(plus1(y)) // => 16: invoke two functions in one expression

function plus1(x) { // Define a function named "plus1" with parameter "x"
 return x + 1; // Return a value one larger than the value passed in
} // Functions are enclosed in curly braces
plus1(y) // => 4: y is 3, so this invocation returns 3+1

let square = function(x) { // Functions are values and can be assigned to vars
 return x * x; // Compute the function's value
}; // Semicolon marks the end of the assignment.
square(plus1(y)) // => 16: invoke two functions in one expression

 ```


## Authors

👤 **Moises Hernandez**

- GitHub: [@Mhdez221993](https://github.com/Mhdez221993)
- Twitter: [@MoisesH42060050](https://twitter.com/MoisesH42060050)
- LinkedIn: [Moises Hernandez Coronado](https://www.linkedin.com/in/moises-hernandez-9bbb17145/)

## Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Mhdez221993/JavaScript/issues).

## Show your support
Give a ⭐️ if you like this project!

## Acknowledgments

- JavaScript: The Definitive Guide, Seventh Edition, by David Flanagan (O’Reilly). Copyright 2020 David Flanagan, 978-1-491-95202-3.
