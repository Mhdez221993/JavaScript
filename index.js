function sudokuSolve(board) {
  const rows = board.length;
  const cols = board[0].length;

  // Helper function for backtracking
  function solve(board) {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (board[row][col] == ".") {
          // Try each digit from 1 to 9
          for (let digit = "1"; digit <= "9"; digit++) {
            if (isValid(board, row, col, digit)) {
              // Place the digit in the cell
              board[row][col] = digit;

              // Recursively solve the Sudoku puzzle
              if (solve(board)) {
                return true; // Solution found
              }

              // Undo the current cell for backtracking
              board[row][col] = ".";
            }
          }

          return false; // No valid digit found
        }
      }
    }

    return true; // All cells filled, solution found
  }

  return solve(board);
}

// Helper function to check if a digit is valid in a given cell
function isValid(board, row, col, digit) {
  // Check if the digit is already present in the same row or column
  for (let i = 0; i < 9; i++) {
    if (board[row][i] == digit || board[i][col] == digit) {
      return false;
    }
  }

  // Check if the digit is already present in the 3x3 sub-grid
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] == digit) {
        return false;
      }
    }
  }

  return true;
}

let board = [
  ["4", "8", "9", ".", "4", ".", "6", ".", "5"],
  [".", "7", ".", ".", ".", "8", ".", "4", "1"],
  ["5", "6", ".", "9", ".", ".", ".", ".", "8"],
  [".", ".", ".", "7", ".", "5", ".", "9", "."],
  [".", "9", ".", "4", ".", "1", ".", "5", "."],
  [".", "3", ".", "9", ".", "6", ".", "1", "."],
  ["8", ".", ".", ".", ".", ".", ".", ".", "7"],
  [".", "2", ".", "8", ".", ".", ".", "6", "."],
  [".", ".", "6", ".", "7", ".", ".", "8", "."],
];

console.log(sudokuSolve(board));
