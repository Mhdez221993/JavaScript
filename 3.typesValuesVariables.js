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

// Arithmetic in JavaScript
Math.pow(2, 53); // => 9007199254740992: 2 to the power 53
Math.round(0.6); // => 1.0: round to the nearest integer
Math.ceil(0.6); // => 1.0: round up to an integer
Math.floor(0.6); // => 0.0: round down to an integer
Math.abs(-5); // => 5: absolute value
Math.max(x, y, z); // Return the largest argument
Math.min(x, y, z); // Return the smallest argument
Math.random(); // Pseudo-random number x where 0 <= x < 1.0
Math.PI; // π: circumference of a circle / diameter
Math.E; // e: The base of the natural logarithm
Math.sqrt(3); // => 3**0.5: the square root of 3
Math.pow(3, 1 / 3); // => 3**(1/3): the cube root of 3
Math.sin(0); // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10); // Natural logarithm of 10
Math.log(100) / Math.LN10; // Base 10 logarithm of 100
Math.log(512) / Math.LN2; // Base 2 logarithm of 512
Math.exp(3); // Math.E cubed
// ES6 defines more functions on the Math object:
Math.cbrt(27); // => 3: cube root
Math.hypot(3, 4); // => 5: square root of sum of squares of all arguments
Math.log10(100); // => 2: Base-10 logarithm
Math.log2(1024); // => 10: Base-2 logarithm
Math.log1p(x); // Natural log of (1+x); accurate for very small x
Math.expm1(x); // Math.exp(x)-1; the inverse of Math.log1p()
Math.sign(x); // -1, 0, or 1 for arguments <, ==, or > 0
Math.imul(2, 3); // => 6: optimized multiplication of 32-bit integers
Math.clz32(0xf); // => 28: number of leading zero bits in a 32-bit integer
Math.trunc(3.9); // => 3: convert to an integer by truncating fractional part
Math.fround(x); // Round to nearest 32-bit float number
Math.sinh(x); // Hyperbolic sine. Also Math.cosh(), Math.tanh()
Math.asinh(x); // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()
