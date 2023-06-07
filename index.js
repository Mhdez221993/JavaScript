function getKnightShortestPath(x, y) {
  function bfs(start) {
    const visited = new Set();
    let steps = 0;
    const queue = [start];
    while (queue.length > 0) {
      const n = queue.length;
      for (let i = 0; i < n; i++) {
        const node = queue.shift();
        if (node[0] == x && node[1] == y) return steps;
        for (const neighbor of get_neighbors(node)) {
          const neighbor_str = neighbor.join(",");
          if (visited.has(neighbor_str)) continue;
          queue.push(neighbor);
          visited.add(neighbor_str);
        }
      }
      steps++;
    }
    return steps;
  }

  function get_neighbors(coord) {
    const res = [];
    const [row, col] = coord;
    const delta_row = [-2, -2, -1, 1, 2, 2, 1, -1];
    const delta_col = [-1, 1, 2, 2, 1, -1, -2, -2];
    for (let i = 0; i < delta_row.length; i++) {
      const r = row + delta_row[i];
      const c = col + delta_col[i];
      res.push([r, c]);
    }
    return res;
  }

  return bfs([0, 0]);
}

console.log(getKnightShortestPath(5, 5));
