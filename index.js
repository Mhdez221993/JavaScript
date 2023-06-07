function mapGateDistances(dungeonMap) {
  let rows = dungeonMap.length;
  let cols = dungeonMap[0].length;

  function dfs(i, j, steps) {
    if (
      i < 0 ||
      j < 0 ||
      i > rows - 1 ||
      j > cols - 1 ||
      dungeonMap[i][j] === -1 ||
      dungeonMap[i][j] < steps
    )
      return;

    if (dungeonMap[i][j] !== 0) dungeonMap[i][j] = steps;
    dfs(i - 1, j, steps + 1); // up
    dfs(i + 1, j, steps + 1); // down
    dfs(i, j - 1, steps + 1); // left
    dfs(i, j + 1, steps + 1); // right
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dungeonMap[i][j] === 0) dfs(i, j, 0);
    }
  }

  return dungeonMap;
}

let INF = Infinity;

let dungeon_map = [
  [INF, -1, 0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];

console.log(mapGateDistances(dungeon_map));
