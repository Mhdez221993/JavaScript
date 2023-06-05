var findOrder = function (numCourses, prerequisites) {
  let graph = new Array(numCourses).fill(0).map(() => []);
  let indegrees = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    let course = prerequisites[i][0];
    let prerequisite = prerequisites[i][1];
    graph[prerequisite].push(course);
    indegrees[course]++;
  }

  let queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegrees[i] === 0) {
      queue.push(i);
    }
  }

  let order = [];
  while (queue.length !== 0) {
    let current = queue.shift();
    order.push(current);
    numCourses--;
    for (let i = 0; i < graph[current].length; i++) {
      let nextCourse = graph[current][i];
      indegrees[nextCourse]--;
      if (indegrees[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  if (numCourses !== 0) {
    return [];
  }

  return order;
};
