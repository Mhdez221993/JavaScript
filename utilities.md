# Utilities

## A function to compute the absolute value.
```js
function abs(x) {
  if (x >= 0) { // The if statement...
    return x; // executes this code if the comparison is true.
  } // This is the end of the if clause.
  else { // The optional else clause executes its code if
    return -x; // the comparison is false.
  } // Curly braces optional when 1 statement per clause.
} // Note return statements nested inside if/else.
abs(-10) === abs(10) // => true

```

##  Compute the sum of the elements of an array
```js
function sum(array) {
 let sum = 0; // Start with an initial sum of 0.
 for(let x of array) { // Loop over array, assigning each element to x.
 sum += x; // Add the element value to the sum.
 } // This is the end of the loop.
 return sum; // Return the sum.
}
sum(primes) // => 28: sum of the first 5 primes 2+3+5+7+11

```

##  A function to compute factorials
```js
function factorial(n) { // A function to compute factorials
  let product = 1; // Start with a product of 1
  while(n > 1) { // Repeat statements in {} while expr in () is true
    product *= n; // Shortcut for product = product * n;
    n--; // Shortcut for n = n - 1
  } // End of loop
  return product; // Return the product
}

```

## JavaScript class to represent 2D geometric points
```js
class Point { // By convention, class names are capitalized.
  constructor(x, y) { // Constructor function to initialize new instances.
    this.x = x; // This keyword is the new object being initialized.
    this.y = y; // Store function arguments as object properties.
  } // No return is necessary in constructor functions.

  distance() { // Method to compute distance from origin to point.
    return Math.sqrt( // Return the square root of x² + y².
      this.x * this.x + // this refers to the Point object on which
      this.y * this.y // the distance method is invoked.
    );
  }
}

// Use the Point() constructor function with "new" to create Point objects
let p = new Point(1, 1); // The geometric point (1,1).

// Now use a method of the Point object p
p.distance() // => Math.SQRT2

```

## Character Frequency Histograms
a Node program that reads text from standard input, computes a character frequency histogram from that text, and then prints out the histogram.
You could invoke the program like this: `node charfreq.js < corpus.txt` or ` node charfreq.js < charfreq.js`

This class extends Map so that the get() method returns the specified value instead of null when the key is not in the map
```js
class DefaultMap extends Map {
  constructor(defaultValue) {
    super(); // Invoke superclass constructor
    this.defaultValue = defaultValue; // Remember the default value
  }

  get(key) {
    if (this.has(key)) { // If the key is already in the map
      return super.get(key); // return its value from superclass.
    }
    else {
      return this.defaultValue; // Otherwise return the default value
    }
  }
}

```

This class computes and displays letter frequency histograms
```js
class Histogram {
  constructor() {
    this.letterCounts = new DefaultMap(0); // Map from letters to counts
    this.totalLetters = 0; // How many letters in all
  }

 // This function updates the histogram with the letters of text.
  add(text) {
    // Remove whitespace from the text, and convert to upper case
    text = text.replace(/\s/g, "").toUpperCase();

    // Now loop through the characters of the text
    for(let character of text) {
      let count = this.letterCounts.get(character); // Get old count
      this.letterCounts.set(character, count+1); // Increment it
      this.totalLetters++;
    }
  }

  // Convert the histogram to a string that displays an ASCII graphic
  toString() {
    // Convert the Map to an array of [key,value] arrays
    let entries = [...this.letterCounts];

    // Sort the array by count, then alphabetically
    entries.sort((a,b) => { // A function to define sort order.
      if (a[1] === b[1]) { // If the counts are the same
        return a[0] < b[0] ? -1 : 1; // sort alphabetically.
      } else { // If the counts differ
        return b[1] - a[1]; // sort by largest count.
      }
    });

    // Convert the counts to percentages
    for(let entry of entries) {
      entry[1] = entry[1] / this.totalLetters*100;
    }

    // Drop any entries less than 1%
    entries = entries.filter(entry => entry[1] >= 1);

    // Now convert each entry to a line of text
    let lines = entries.map(
      ([l,n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
    );

    // And return the concatenated lines, separated by newline characters.
    return lines.join("\n");
  }
}

```

This async (Promise-returning) function creates a Histogram object, asynchronously reads chunks of text from standard input, and adds those chunks to the histogram. When it reaches the end of the stream, it returns this histogram
```js
async function histogramFromStdin() {
  process.stdin.setEncoding("utf-8"); // Read Unicode strings, not bytes
  let histogram = new Histogram();

  for await (let chunk of process.stdin) { // Read data a 1 at time as chuck or words
    histogram.add(chunk);
  }

  return histogram;
}

```

This one final line of code is the main body of the program. It makes a Histogram object from standard input, then prints the histogram.
```js
histogramFromStdin().then(histogram => { console.log(histogram.toString()); });

```
