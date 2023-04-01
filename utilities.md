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