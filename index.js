function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

function fibWithMemoization(n, memo) {
  // check in memo, if found, retrieve and return right away
  if (n in memo) return memo[n];

  if (n === 0 || n === 1) return n;

  const res = fib(n - 1, memo) + fib(n - 2, memo);

  // save result to memo before returning
  memo[n] = res;
  return res;
}

console.log(fib(12));
