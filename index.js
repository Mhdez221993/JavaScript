// Your code here.
let size = 10;
let char = "#";
let str = "";

for (let i = 0; i < size - 1; i++) {
  char += " #";
}

for (let i = 0; i < size; i++) {
  if (i % 2 === 0) str = `${str}\n ${char}`;
  if (i % 2 !== 0) str = `${str}\n${char}`;
}

console.log(str);
