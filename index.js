function countNumberOfIslands(grid) {
  const num_rows = grid.length;
  const num_cols = grid[0].length;

  function getNeighbors(coord) {
    const res = [];
    const [row, col] = coord;
    const delta_row = [-1, 0, 1, 0];
    const delta_col = [0, 1, 0, -1];
    for (let i = 0; i < delta_row.length; i++) {
      const r = row + delta_row[i];
      const c = col + delta_col[i];
      if (0 <= r && r < num_rows && 0 <= c && c < num_cols) {
        res.push([r, c]);
      }
    }
    return res;
  }

  function bfs(start) {
    const queue = [start];
    const [r, c] = start;
    grid[r][c] = 0;
    while (queue.length > 0) {
      const node = queue.shift();
      for (const neighbor of getNeighbors(node)) {
        const [r, c] = neighbor;
        if (grid[r][c] === 0) continue;
        queue.push(neighbor);
        grid[r][c] = 0;
      }
    }
  }

  let count = 0;
  // bfs starting from each unvisited land cell
  for (let r = 0; r < num_rows; r++) {
    for (let c = 0; c < num_cols; c++) {
      if (grid[r][c] === 0) continue;
      bfs([r, c]);
      // bfs would find 1 connected island, increment count
      count++;
    }
  }
  return count;
}
