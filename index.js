var solve = function (board) {
  if (board == null || board.length === 0) return;

  const rows = board.length - 1;
  const cols = board[0].length - 1;
  let queue = [];

  for (let i = 0; i <= rows; i++) {
    if (board[i][0] === "O") queue.push([i, 0]);
    if (board[i][cols] === "O") queue.push([i, cols]);
  }

  for (let j = 0; j <= cols; j++) {
    if (board[0][j] === "O") queue.push([0, j]);
    if (board[rows][j] === "O") queue.push([rows, j]);
  }

  while (queue.length > 0) {
    let [i, j] = queue.shift();
    if (board[i][j] == "O") {
      board[i][j] = "T";
      if (i - 1 >= 0 && board[i - 1][j] == "O") queue.push([i - 1, j]);
      if (i + 1 <= rows && board[i + 1][j] == "O") queue.push([i + 1, j]);
      if (j - 1 >= 0 && board[i][j - 1] == "O") queue.push([i, j - 1]);
      if (j + 1 <= cols && board[i][j + 1] == "O") queue.push([i, j + 1]);
    }
  }

  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= cols; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
      else if (board[i][j] === "T") board[i][j] = "O";
    }
  }

  return board;
};

let board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

console.log(solve(board));
