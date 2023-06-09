function getIndegree(graph) {
  let indegree = new Map();
  for (let key of graph.keys()) {
    indegree.set(key, 0);
  }

  for (let key of graph.keys()) {
    for (let value of graph.get(key)) {
      indegree.set(value, indegree.get(value) + 1);
    }
  }

  return indegree;
}

function topoSort(graph) {
  let indegree = getIndegree(graph);
  let queue = [];
  for (let [k, v] of indegree) {
    if (v === 0) queue.push(v);
  }

  let count = 0;
  while (queue.length > 0) {
    let node = queue.shift();
    count++;

    for (let neighbor of graph.get(node)) {
      indegree.set(neighbor, indegree.get(neighbor) - 1);
      if (indegree.get(neighbor) === 0) queue.push(neighbor);
    }
  }

  return count;
}

function isValidCourseSchedule(n, prerequisites) {
  const graph = new Map();
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let [k, v] of prerequisites) {
    graph.get(k).push(v);
  }

  return topoSort(graph) === n;
}
