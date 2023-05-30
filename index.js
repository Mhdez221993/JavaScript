var solve = function (board) {
  if (!board || board.length === 0) return;
  const rows = board.length;
  const cols = board[0].length;

  // Create a DFS function to handle traversal
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= rows || j >= cols || board[i][j] !== "O") return;
    board[i][j] = "T";

    dfs(i - 1, j); // up
    dfs(i + 1, j); // down
    dfs(i, j - 1); // left
    dfs(i, j + 1); // right
  };

  // Check first and last column
  for (let i = 0; i < rows; i++) {
    if (board[i][0] === "O") dfs(i, 0);
    if (board[i][cols - 1] === "O") dfs(i, cols - 1);
  }

  // Check first row and last row
  for (let j = 0; j < cols; j++) {
    if (board[0][j] === "O") dfs(0, j);
    if (board[rows - 1][j] === "O") dfs(rows - 1, j);
  }

  // Post-process the board
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
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
