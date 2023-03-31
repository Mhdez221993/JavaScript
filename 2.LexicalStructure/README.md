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

##  Identifiers and Reserved Words
An identifier in JavaScript is a name that you give to a variable, function, class, or other element of your program. Identifiers are used to refer to these elements throughout your code, allowing you to assign values, call functions, access properties, and perform other operations on them.

* `as`: Used in TypeScript for type assertions.
* `const`: Declares a read-only variable.
* `export`: Used to export functions, classes, or variables from a module.
* `get`: Defines a getter method for an object property.
* `null`: A special value that represents the absence of a value.
* `target`: Refers to the target of an event in event handling.
* `void`: A keyword that represents the absence of a value.
* `async`: Used to define an asynchronous function.
* `continue`: Used to skip to the next iteration of a loop.
* `extends`: Used to define a class that inherits from another class.
* `if`: Used to create conditional statements.
* `of`: Used in a for...of loop to iterate over iterable objects.
* `this`: Refers to the current object or context.
* `while`: Used to create a loop that executes while a condition is true.
* `await`: Used to wait for a promise to resolve in an asynchronous function.
* `debugger`: Used to set a breakpoint in your code for debugging purposes.
* `false`: A boolean value that represents false.
* `import`: Used to import functions, classes, or variables from a module.
* `return`: Used to return a value from a function.
* `throw`: Used to throw an error or exception.
* `with`: Used to create a new scope for a block of code.
* `break`: Used to break out of a loop or switch statement.
* `default`: Used in a switch statement to specify the default case.
* `finally`: Used in a try...catch statement to specify a block of code that is always executed.
* `in`: Used to check if a property exists in an object.
* `set`: Defines a setter method for an object property.
* `true`: A boolean value that represents true.
* `yield`: Used in a generator function to yield a value.
* `case`: Used in a switch statement to specify a case.
* `delete`: Used to delete an object property or element from an array.
* `for`: Used to create a loop that executes for a specified number of times.
* `instanceof`: Used to check if an object is an instance of a particular class.
* `static`: Used to define a static method or property on a class.
* `try`: Used to create a block of code that may throw an error or exception.
* `catch`: Used to handle errors or exceptions thrown by a try block.
* `do`: Used to create a loop that executes at least once.
* `from`: Used in an import statement to specify the source module.
* `let`: Declares a block-scoped variable.
* `super`: Refers to the parent class of a subclass.
* `typeof`: Used to get the type of a value or variable.
* `class`: Defines a new class.
* `else`: Used in a conditional statement to specify an alternate block of code.
* `function`: Defines a new function.
* `new`: Used to create a new instance of a class or constructor function.
* `switch`: Used to create a multi-way branch in your code.
* `var`: Declares a variable, with function scope or global scope. Note that let and const are recommended over var.

JavaScript also reserves or restricts the use of certain keywords that are not currently used by the language but that might be used in future versions:
`enum` `implements` `interface` `package` `private` `protected` `public`