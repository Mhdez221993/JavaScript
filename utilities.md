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
