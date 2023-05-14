function numOfPathsToDest(n) {
  // your code goes here
  let moves = Array.from({ length: n }, (el) => new Uint32Array(n));
  //let moves = [[1]]

  moves[0][0] = 1;
  console.log(moves);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (i - 1 >= j) {
        moves[i][j] = moves[i - 1][j];
      }

      if (j - 1 >= 0) {
        moves[i][j] = moves[i][j] + moves[i][j - 1];
      }
      console.log(moves);
    }
  }

  return moves[n - 1][n - 1];
}

console.log(numOfPathsToDest(4));

/*
1 0 0 0
0 0 0 0
0 0 0 0
0 0 0 0
*/
