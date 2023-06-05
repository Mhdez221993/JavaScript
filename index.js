var canFinish = function (numCourses, prerequisites) {
  let graph = new Array(numCourses).fill(0).map(() => []);
  let visited = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    let [course, prerequisite] = prerequisites[i];
    graph[course].push(prerequisite);
  }

  function hasCycle(i) {
    if (visited[i] === -1) return true;
    if (visited[i] === 1) return false;

    visited[i] = -1;

    for (let j = 0; j < graph[i].length; j++) {
      if (hasCycle(graph[i][j])) return true;
    }

    visited[i] = 1;
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }

  return true;
};

console.log(canFinish(2, [[1, 0]]));
