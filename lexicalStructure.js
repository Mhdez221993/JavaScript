// Unicode normalization is the process of transforming Unicode text into a standard, canonical form that is easier to compare and manipulate.
let str = "Café";
let normalizedStr = str.normalize();
console.log(normalizedStr);

let str2 = "Cafe\u0301";
let normalizedStr2 = str2.normalize();
console.log(normalizedStr2);

let café = 1; // Define a variable using a Unicode character
café; // => 1; access the variable using an escape sequence
café; // => 1; another form of the same escape sequence

console.log("\u{1F600}"); // Prints a smiley face emoji

let a = 3,
  b = 4;
console.log(b);
