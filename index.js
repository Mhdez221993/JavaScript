function getGraph(tasks, req) {
  let graph = new Map();
  for (let task of tasks) {
    graph.set(task, []);
  }
  for (let [key, value] of req) {
    graph.get(key).push(value);
  }
  return graph;
}

function getTaskDuration(tasks, times) {
  let taskDurations = new Map();
  for (let i = 0; i < times.length; i++) {
    taskDurations.set(tasks[i], times[i]);
  }
  return taskDurations;
}

function getInDegree(graph) {
  let inDegree = new Map();
  for (let node of graph.keys()) {
    inDegree.set(node, 0);
  }

  for (node of graph.keys()) {
    for (let neighbor of graph.get(node)) {
      inDegree.set(neighbor, inDegree.get(neighbor) + 1);
    }
  }
  return inDegree;
}

function topoSort(graph, inDegree, taskDuration) {
  let queue = [];
  let res = 0;

  const dis = new Map();
  for (let node of graph.keys()) {
    dis.set(node, 0);
  }

  for (let node of inDegree.keys()) {
    if (inDegree.get(node) === 0) {
      queue.push(node);
      dis.set(node, taskDuration.get(node));
      res = Math.max(res, dis.get(node));
    }
  }

  while (queue.length > 0) {
    let node = queue.shift();
    for (let child of graph.get(node)) {
      inDegree.set(child, inDegree.get(child) - 1);
      dis.set(
        child,
        Math.max(dis.get(child), dis.get(node) + taskDuration.get(child))
      );
      res = Math.max(res, dis.get(child));
      if (inDegree.get(child) === 0) queue.push(child);
    }
  }

  return res;
}

function taskScheduling2(tasks, times, requirements) {
  const graph = getGraph(tasks, requirements);
  const inDegree = getInDegree(graph);
  const taskDuration = getTaskDuration(tasks, times);
  return topoSort(graph, inDegree, taskDuration);
}

let tasks = ["a", "b", "c", "d"];
let times = [1, 1, 2, 1];
let req = [
  ["a", "b"],
  ["c", "b"],
  ["b", "d"],
];

console.log(taskScheduling2(tasks, times, req));
