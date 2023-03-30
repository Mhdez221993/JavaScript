// Unicode normalization is the process of transforming Unicode text into a standard, canonical form that is easier to compare and manipulate.
let str = "Café";
let normalizedStr = str.normalize();
console.log(normalizedStr);

let str2 = "Cafe\u0301";
let normalizedStr2 = str2.normalize();
console.log(normalizedStr2);
