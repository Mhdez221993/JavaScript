// typed array is an object that represents an array of binary data that has a fixed length and a specific type for its elements.
let myArray = new Int8Array(4).fill(1);
console.log(myArray);

// Institute of Electrical and Electronics Engineers (IEEE);
// base-10
0;
3;
10000000;

// In addition to base-10 integer literals, JavaScript recognizes hexadecimal (base-16) values. A hexadecimal literal begins with 0x or 0X, followed by a string of hexadeci‐
// mal digits. A hexadecimal digit is one of the digits 0 through 9 or the letters a (or A) through f (or F), which represent values 10 through 15. Here are examples of hexadecimal integer literals:
0xff; // => 255: (15*16 + 15)
0xbadcafe; // => 195939070

// In ES6 and later, you can also express integers in binary (base 2) or octal (base 8) using the prefixes 0b and 0o (or 0B and 0O) instead of 0x:
0b10101; // => 21: (1*16 + 0*8 + 1*4 + 0*2 + 1*1)
0o377; // => 255: (3*64 + 7*8 + 7*1)

// Floating-Point Literals
3.14;
2345.6789;
0.333333333333333333;
// also can be represented suing exponential notation [digits][.digits][(E|e)[(+|-)]digits]
6.02e23; // 6.02 × 10²³
1.4738223e-32; // 1.4738223 × 10⁻³²

// Separators in Numeric Literals
// The use of underscores in numeric literals is a new feature introduced in ECMAScript 2021 to improve readability of large numbers and make them easier to read for humans.
let billion = 1_000_000_000; // Underscore as a thousands separator.
let bytes = 0x89_ab_cd_ef; // As a bytes separator.
let bits = 0b0001_1101_0111; // As a nibble separator.
let fraction = 0.123_456_789; // Works in the fractional part, too.
console.log(parseInt(bytes));
