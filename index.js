var numIslands = function (grid) {
  let count = 0;
  let rows = grid.length;
  let cols = grid[0].length;

  function bfs(row, col) {
    let queue = [[row, col]];
    while (queue.length > 0) {
      let [i, j] = queue.shift();

      // check i and j are in boudary and curr value === 0
      if (i >= 0 && j >= 0 && i < rows && j < cols && grid[i][j] === "1") {
        // mark the cell as visited
        grid[i][j] = "0";

        // for every 1 we encounter push all adjacent cells: up, down, left, right directions
        queue.push([i - 1, j]); // up
        queue.push([i + 1, j]); // down
        queue.push([i, j - 1]); // left
        queue.push([i, j + 1]); // right
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        bfs(i, j);
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
