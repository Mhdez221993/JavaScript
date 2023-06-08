function findInDegree(graph) {
  const inDegree = new Map();
  for (const node of graph.keys()) {
    inDegree.set(node, 0);
  }
  for (const node of graph.keys()) {
    for (neighbor of graph.get(node)) {
      inDegree.set(neighbor, inDegree.get(neighbor) + 1);
    }
  }
  return inDegree;
}

function topoSort(graph) {
  const res = [];
  const q = [];
  const inDegree = findInDegree(graph);
  for (const node of inDegree.keys()) {
    if (inDegree.get(node) == 0) {
      q.push(node);
    }
  }
  while (q.length > 0) {
    const node = q.shift();
    res.push(node);
    for (const neighbor of graph.get(node)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) == 0) {
        q.push(neighbor);
      }
    }
  }
  return graph.size === res.length ? res : null;
}

function taskScheduling(tasks, requirements) {
  const graph = new Map();
  for (let task of tasks) {
    graph.set(task, []);
  }
  for (let req of requirements) {
    graph.get(req[0]).push(req[1]);
  }
  return topoSort(graph);
}

let tasks = ["a", "b", "c", "d"];
let requirements = [
  ["a", "b"],
  ["c", "b"],
  ["b", "d"],
];

console.log(taskScheduling(tasks, requirements));
