/**
 * @param {string[]} tokens
 * @return {number}
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];

  for (const token of tokens) {
    console.log(stack);
    if (isOperator(token)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const result = performOperation(token, operand1, operand2);
      stack.push(result);
    } else {
      stack.push(parseInt(token, 10));
    }
  }

  return stack[0];
};

function isOperator(token) {
  return token === "+" || token === "-" || token === "*" || token === "/";
}

function performOperation(operator, operand1, operand2) {
  if (operator === "+") {
    return operand1 + operand2;
  } else if (operator === "-") {
    return operand1 - operand2;
  } else if (operator === "*") {
    return operand1 * operand2;
  } else if (operator === "/") {
    return Math.trunc(operand1 / operand2);
  }
}

const tokens = ["2", "1", "+", "3", "*"];
console.log(evalRPN(tokens));
