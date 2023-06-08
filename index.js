function findIndegree(tasks, requirements) {
  let inDegree = new Map();
  let graph = new Map();

  for (let task of tasks) {
    graph.set(task, []);
    inDegree.set(task, 0);
  }

  for (let [task, requirement] of requirements) {
    inDegree.set(requirement, inDegree.get(requirement) + 1);
    graph.get(task).push(requirement);
  }

  return { inDegree, graph };
}

function taskScheduling(tasks, requirements) {
  let { inDegree, graph } = findIndegree(tasks, requirements);
  let res = [];
  let queue = [];

  for (let [key, val] of inDegree) {
    if (val === 0) queue.push(key);
  }

  while (queue.length > 0) {
    let node = queue.shift();
    res.push(node);

    for (let neigbor of graph.get(node)) {
      inDegree.set(neigbor, inDegree.get(neigbor) - 1);
      if (inDegree.get(neigbor) === 0) queue.push(neigbor);
    }
  }

  return res;
}

let tasks = ["a", "b", "c", "d"];
let requirements = [
  ["a", "b"],
  ["c", "b"],
  ["b", "d"],
];

console.log(taskScheduling(tasks, requirements));
