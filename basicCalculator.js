var calculate = function (s) {
  let stack = [];
  let num = 0;
  let sign = 1;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char >= "0" && char <= "9") {
      num = num * 10 + parseInt(char);
    } else if (char === "+") {
      result += sign * num;
      num = 0;
      sign = 1;
    } else if (char === "-") {
      result += sign * num;
      num = 0;
      sign = -1;
    } else if (char === "(") {
      stack.push(result);
      stack.push(sign);
      result = 0;
      sign = 1;
    } else if (char === ")") {
      result += sign * num;
      num = 0;
      result *= stack.pop(); // Apply the sign before the parenthesis
      result += stack.pop(); // Add the result before the parenthesis
    }
  }

  if (num !== 0) {
    result += sign * num;
  }

  return result;
};

const s = "1";
console.log(calculate(s));
