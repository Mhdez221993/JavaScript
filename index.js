const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function mapGateDistances(dungeonMap) {
  const queue = [];
  const n = dungeonMap.length,
    m = dungeonMap[0].length;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (dungeonMap[row][col] == 0) {
        queue.push([row, col]);
      }
    }
  }

  while (queue.length > 0) {
    let [row, col] = queue.shift();
    for (const [deltaRow, deltaCol] of directions) {
      const totalRow = row + deltaRow;
      const totalCol = col + deltaCol;
      if (totalRow >= 0 && totalRow < n && totalCol >= 0 && totalCol < m) {
        if (dungeonMap[totalRow][totalCol] == INF) {
          dungeonMap[totalRow][totalCol] = dungeonMap[row][col] + 1;
          queue.push([totalRow, totalCol]);
        }
      }
    }
  }
  return dungeonMap;
}

const INF = 2147483647;

let dungeon_map = [
  [INF, -1, 0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];

console.log(mapGateDistances(dungeon_map));
