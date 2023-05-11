var isValid = function (s) {
  let bracketStack = [];

  for (let char of s) {
    // evalue if is open bracket
    if (char === "(" || char === "[" || char === "{") {
      bracketStack.push(char);
      // evalue if is a closing bracket, if so is time to compare it with the last value in the stack;
    } else if (
      (char === ")" && bracketStack[bracketStack.length - 1] === "(") ||
      (char === "]" && bracketStack[bracketStack.length - 1] === "[") ||
      (char === "}" && bracketStack[bracketStack.length - 1] === "{")
    ) {
      bracketStack.pop();
    } else {
      return false;
    }
  }

  return bracketStack.length === 0;
};

let s = "(";
console.log(isValid(s));
