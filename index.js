var numIslands = function (grid) {
  let count = 0;
  let rows = grid.length;
  let cols = grid[0].length;

  function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] == 0) return;
    // mark the cell as visited
    grid[i][j] = "0";

    // visti all adjacent cells in up, down, left, right directions
    dfs(grid, i - 1, j); // up
    dfs(grid, i + 1, j); // down
    dfs(grid, i, j - 1); // left
    dfs(grid, i, j + 1); // right
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == 1) {
        dfs(grid, i, j);
        count += 1;
      }
    }
  }

  return count;
};

let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid));
