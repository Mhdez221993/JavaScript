# Lexical Structure
The lexical structure of a programming language is the set of elementary rules that specifies how you write programs in that language like:
* Case sensitivity, spaces, and line breaks
* Comments
* Literals
* Identifiers and reserved words
* Unicode
* Optional semicolons

## The Text of a JavaScript Program
JavaScript is a case-sensitive language. This means that language keywords, variables, function names, and other identifiers must always be typed with a consistent capitalization of letters. The `while` keyword, for example, must be typed `“while”` not `“While”` or `“WHILE”` Similarly, `online`, `Online`, `OnLine`, and `ONLINE` are four distinct variable names.

## Comments
Comments in JavaScript are used to add explanatory or informative text to your code that is ignored by the JavaScript engine when your program is run.
JavaScript supports two styles of comments this `//` and this `/* */`
```js
// This is a single-line comment.

/* This is also a comment */ // and here is another comment.

/*
 * This is a multi-line comment. The extra * characters at the start of
 * each line are not a required part of the syntax; they just look cool!
 */

```

## Literals
A literal in JavaScript is a notation for representing a fixed value in your code. Literals are used to represent data such as numbers, strings, booleans, arrays, objects, and more. When you define a literal, you are directly specifying a value rather than referencing a variable or expression.
```js
// Number literals
let x = 42;
let y = 3.14;

// String literals
let greeting = "Hello, world!";
let name = 'John';

// Boolean literals
let isTrue = true;
let isFalse = false;

// Array literals
let numbers = [1, 2, 3, 4, 5];
let colors = ['red', 'green', 'blue'];

// Object literals
let person = { firstName: 'John', lastName: 'Doe', age: 25 };
let car = { make: 'Toyota', model: 'Camry', year: 2021 };

```