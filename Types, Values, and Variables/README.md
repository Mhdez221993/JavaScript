# Types, Values, and Variables
In programming languages, values are manipulated to create computer programs. Types refer to the kinds of values that can be represented and manipulated in a language, and one of the fundamental characteristics of a programming language is the set of types it supports. When a program needs to store a value for future use, it assigns the value to a variable. Variables have names, which allow them to be referred to in programs to access their values. The workings of variables are also a fundamental characteristic of any programming language.

## Overview and Definitions
* JavaScript types can be divided into primitive types and object types.
* Primitive types include `numbers`, `strings`, and `booleans`, while special values like `null` and `undefined` are also considered primitive.
* Object types include basic `objects`, `arrays`, `Set` and `Map` objects, `typed arrays`, `RegExp`, `Date`, and `Error` types.
* `Functions` and `classes` are also considered object types.
* JavaScript supports object-oriented programming style where types define methods for working with values.
* JavaScript’s `object` types are `mutable` while its `primitive` types are `immutable`.
* JavaScript automatically `converts` values from one type to another when necessary.
* `Constants` and `variables` allow names to refer to values in JavaScript programs.

## Numbers
The primary numeric type in JavaScript is the Number type, which uses the 64-bit floating-point format defined by the IEEE 754 standard. The Number type can represent integers and approximate real numbers as large as ±1.7976931348623157 × 10^308 and as small as ±5 × 10^-324. JavaScript allows for different formats of numeric literals, which can be preceded by a minus sign to represent negative numbers. However, some operations in JavaScript, such as array indexing and bitwise operators, are performed with 32-bit integers, which can lead to precision loss in larger integer values. For exact representation of larger integers, other methods can be used.

