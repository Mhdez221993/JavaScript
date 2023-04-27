function bfs(graph, start, end) {
  const visited = new Set([start]);
  const predecessor = {};
  const queue = [start];

  while (queue.length > 0) {
    let curr = queue.shift();

    if (curr === end) {
      let path = [end];
      let node = end;

      while (node !== start) {
        path.unshift(predecessor[node]);
        node = predecessor[node];
      }

      return path;
    }

    for (let neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        predecessor[neighbor] = curr;
        queue.push(neighbor);
      }
    }
  }

  return null;
}

const graph = {
  A: ["B", "C"],
  B: ["A", "C", "D"],
  C: ["A", "B", "D", "E"],
  D: ["B", "C", "E", "F"],
  E: ["C", "D", "F"],
  F: ["D", "E"],
};

const start = "A";
const end = "F";
const shortestPath = bfs(graph, start, end);
console.log(shortestPath);
