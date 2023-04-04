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

## Introduction
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

A shorthand syntax for function is call  arrow functions
```js
const plus1 = x => x + 1; // The input x maps to the output x + 1
const square = x => x * x; // The input x maps to the output x * x
plus1(y) // => 4: function invocation is the same
square(plus1(y)) // => 16

```

When functions are assigned to the properties of an object, we call
them "methods." All JavaScript objects (including arrays) have methods:
```js
let a = []; // Create an empty array
a.push(1,2,3); // The push() method adds elements to an array
a.reverse(); // Another method: reverse the order of elements

```

We can define our own methods, too. The "this" keyword refers to the object
on which the method is defined: in this case, the points array from earlier.
```js
points.dist = function() { // Define a method to compute distance between points
  let p1 = this[0]; // First element of array we're invoked on
  let p2 = this[1]; // Second element of the "this" object
  let a = p2.x-p1.x; // Difference in x coordinates
  let b = p2.y-p1.y; // Difference in y coordinates
  return Math.sqrt(a*a + // The Pythagorean theorem
  b*b); // Math.sqrt() computes the square root
};
points.dist() // => Math.sqrt(2): distance between our 2 points

```

## Lexical Structure
* Is the set of rules that specifies how you write a program in that language
* JavaScript is a case-sensitive language

Comments are used to document
```js
// This is a single-line comment.
/* This is also a comment */ // and here is another comment.
/*
 * This is a multi-line comment. The extra * characters at the start of
 * each line are not a required part of the syntax; they just look cool!
 */

```
A literal is value that appear as it is in a program
```js
12 // The number twelve
1.2 // The number one point two
"hello world" // A string of text
'Hi' // Another string
true // A Boolean value
false // The other Boolean value
null // Absence of an object

```
An identifier is just a name used to name variables, objects an so on, you can create your onw identifiers like this:
```js
i
my_variable_name
v13
_dummy
$str

```

This is a list of the reserved word, they are part of JavaScript
```js
as          const       export      get         null        target      void

async       continue    extends     if          of          this        while

await       debugger    false       import      return      throw       with

break       default     finally     in          set         true        yield

case        delete      for         instanceof static      try

catch       do          from        let         super       typeof

class       else        function    new         switch      var

```

JavaScript programs are written using Unicode characters and you can write any character in your program
```js
const nameRegex = /^[\p{Letter}\s'-]+$/u; // A regular expression that matches any Unicode letter, space, hyphen, or apostrophe.

function validateName(name) {
  if (name.match(nameRegex)) { // if string name matches the nameRegex
    console.log('Valid name!'); // log to the console
  } else {
    console.log('Invalid name!'); // other wise log this
  }
}

validateName('John Smith'); // Valid name!
validateName('Juan Pérez'); // Valid name!
validateName('林小明'); // Valid name!
validateName('أحمد علي'); // Valid name!
validateName('जॉन डो'); // Valid name!
validateName('123'); // Invalid name!

```

Scape sequence are used to allow older technologies to use Unicode, the star like this `\u`
```js
let café = 1; // Define a variable using a Unicode character
caf\u00e9 // => 1; access the variable using an escape sequence
caf\u{E9} // => 1; another form of the same escape sequence
console.log("\u{1F600}"); // Prints a smiley face emoji
```

Unicode Normalization is a way to speak the same language when writing character, this because there is many ways to write the same character. We can use tools or build in function to normilize
```js
const café = 1; // This constant is named "caf\u{e9}"
const café = 2; // This constant is different: "cafe\u{301}"
café // => 1: this constant has one value
café // => 2: this indistinguishable constant has a different value

// normalization
const str1 = 'Café'; // A string with an accented "e" character.
const str2 = 'Cafe\u0301'; // A string with a Latin "e" character followed by a combining acute accent.

console.log(str1 === str2); // false
console.log(str1.normalize() === str2.normalize()); // true

```

Semicolons are used to separate statements, but they are optionals if the statemens are in separete lines, and the next character is not interpreted as continuation of the current one.
```js
a = 3;
b = 4;
a = 3; b = 4

// JavaScript interprets this code
let a
a
=
3
console.log(a)

// like this:
let a; a = 3; console.log(a)
```

This statements termination rule mentioned above can lead to a suprising aoutcomoes. In general if a statement biging with `[, (, /, +, - `, could be interpreted as continuation
```js
let y = x + f
(a+b).toString()

// is interpreted like this
let y = x + f(a+b).toString();

let x = 0 // Semicolon omitted here
;[x,x+1,x+2].forEach(console.log) // Defensive ; keeps this statement separate

```

There 3 exceptions to the generale rule
```js
// return, throw, yield, break, and continue statements must appear in the same line
return
true;
// JavaScript assumes you meant:
return; true;
// However, you probably meant:
return true;
```

```js
// the ++ and -- operator must appear in the same line

a++
--a

```

```js
// arrow function must appear in the same line
let plus1 = n => n + 1

```

## Types, Values, and Variables
* A programming language is best know for the set of data types it can handle and the way that data type works

JavaScript types can be defined into 2 types primitive and object types, any data type that is not a `number`, `boolean`, `string`, `null`, `undefined`, `symbol` is an `object`

This is the minimum number that can be represented in JavaScript and the maximun by IEEE:  `±1.7976931348623157 × 10308` and `±5 × 10−324`.

This is an Integer Literal
```js
0
3
10000000

```

Exadecial they begin with `0x` has digit from 0 to 9 and letter from A to F
```js
0xff // => 255: (15*16 + 15)
0xBADCAFE // => 195939070

```

Also you can express integer in binary and octal like this
```js
0b10101 // => 21: (1*16 + 0*8 + 1*4 + 0*2 + 1*1)
0o377 // => 255: (3*64 + 7*8 + 7*1)

```

Floating-Point Literals can be represented like this: `[digits][.digits][(E|e)[(+|-)]digits]`
```js
3.14
2345.6789
.333333333333333333
6.02e23 // 6.02 × 10²³
1.4738223E-32 // 1.4738223 × 10⁻³²
```

To make long numbers more readable you can use underscores
```js
let billion = 1_000_000_000; // Underscore as a thousands separator.
let bytes = 0x89_AB_CD_EF; // As a bytes separator.
let bits = 0b0001_1101_0111; // As a nibble separator.
let fraction = 0.123_456_789; // Works in the fractional part, too.
const avogadroConstant = 6.022_140_76e23; // Avogadro's constant in mol^-1

```

JavaScript has build-in function for arithmetic operations
```js
Math.pow(2,53) // => 9007199254740992: 2 to the power 53
Math.round(.6) // => 1.0: round to the nearest integer
Math.ceil(.6) // => 1.0: round up to an integer
Math.floor(.6) // => 0.0: round down to an integer
Math.abs(-5) // => 5: absolute value
Math.max(x,y,z) // Return the largest argument
Math.min(x,y,z) // Return the smallest argument
Math.random() // Pseudo-random number x where 0 <= x < 1.0
Math.PI // π: circumference of a circle / diameter
Math.E // e: The base of the natural logarithm
Math.sqrt(3) // => 3**0.5: the square root of 3
Math.pow(3, 1/3) // => 3**(1/3): the cube root of 3
Math.sin(0) // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10) // Natural logarithm of 10
Math.log(100)/Math.LN10 // Base 10 logarithm of 100
Math.log(512)/Math.LN2 // Base 2 logarithm of 512
Math.exp(3) // Math.E cubed

// ES6 defines more functions on the Math object:
Math.cbrt(27) // => 3: cube root
Math.hypot(3, 4) // => 5: square root of sum of squares of all arguments
Math.log10(100) // => 2: Base-10 logarithm
Math.log2(1024) // => 10: Base-2 logarithm
Math.log1p(x) // Natural log of (1+x); accurate for very small x
Math.expm1(x) // Math.exp(x)-1; the inverse of Math.log1p()
Math.sign(x) // -1, 0, or 1 for arguments <, ==, or > 0
Math.imul(2,3) // => 6: optimized multiplication of 32-bit integers
Math.clz32(0xf) // => 28: number of leading zero bits in a 32-bit integer
Math.trunc(3.9) // => 3: convert to an integer by truncating fractional part
Math.fround(x) // Round to nearest 32-bit float number
Math.sinh(x) // Hyperbolic sine. Also Math.cosh(), Math.tanh()
Math.asinh(x) // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()

```

JavaScript doesn't raise error in case of overflow or division by zero
```js
Infinity // A positive number too big to represent
Number.POSITIVE_INFINITY // Same value
1/0 // => Infinity
Number.MAX_VALUE * 2 // => Infinity; overflow
-Infinity // A negative number too big to represent
Number.NEGATIVE_INFINITY // The same value
-1/0 // => -Infinity
-Number.MAX_VALUE * 2 // => -Infinity

NaN // The not-a-number value
Number.NaN // The same value, written another way
0/0 // => NaN
Infinity/Infinity // => NaN

Number.MIN_VALUE/2 // => 0: underflow
-Number.MIN_VALUE/2 // => -0: negative zero
-1/Infinity // -> -0: also negative 0
-0

```

The following Number properties are defined in ES6
```js
Number.parseInt() // Same as the global parseInt() function
Number.parseFloat() // Same as the global parseFloat() function
Number.isNaN(x) // Is x the NaN value?
Number.isFinite(x) // Is x a number and finite?
Number.isInteger(x) // Is x an integer?
Number.isSafeInteger(x) // Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER // => -(2**53 - 1)
Number.MAX_SAFE_INTEGER // => 2**53 - 1
Number.EPSILON // => 2**-52: smallest difference between numbers

```

In JavaScript NaN is the only value that is not equal to itself
```js
const foo = "foo";
if(foo !== foo) {
  console.log("x is not a valid number");
}

```

Chech if a value is a valid number
```js
let x = 42;
let y = "foo";

console.log(isNaN(x)); // false
console.log(isNaN(y)); // true

```

`0` and `-0` are almost indistiguishable, except when used as a divisor:
```js
let zero = 0; // Regular zero
let negz = -0; // Negative zero
zero === negz // => true: zero and negative zero are equal
1/zero === 1/negz // => false: Infinity and -Infinity are not equal

```

Binary floatin-point represtation cannot excatly represent numbers as simple as 0.1, and this can lead to problems.
```js
let x = .3 - .2; // thirty cents minus 20 cents
let y = .2 - .1; // twenty cents minus 10 cents
x === y // => false: the two values are not the same!
x === .1 // => false: .3-.2 is not equal to .1
y === .1 // => true: .2-.1 is equal to .1
// If these floating-point approximations are problematic for your programs, consider using scaled integers

```

You can use BigInt for large integer
```js
1234n // A not-so-big BigInt literal
0b111111n // A binary BigInt
0o7777n // An octal BigInt
0x8000000000000000n // => 2n**63n: A 64-bit integer

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
