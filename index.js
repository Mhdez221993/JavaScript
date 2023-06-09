const State = Object.freeze({
  TO_VISIT: 0,
  VISITING: 1,
  VISITED: 2,
});

function isValidCourseSchedule(n, prerequisites) {
  function build_graph() {
    let graph = new Map();
    for (const dependency of prerequisites) {
      if (!graph.has(dependency[0])) {
        graph.set(dependency[0], []);
      }
      graph.get(dependency[0]).push(dependency[1]);
    }
    return graph;
  }

  function dfs(start, states) {
    // mark self as visiting
    states[start] = State.VISITING;

    if (graph.get(start)) {
      for (const next_vertex of graph.get(start)) {
        // ignore visited nodes
        if (states[next_vertex] == State.VISITED) continue;
        // revisiting a visiting node, CYCLE!
        if (states[next_vertex] == State.VISITING) return false;
        // recursively visit neighbours
        // if a neighbour found a cycle, return false right away
        if (!dfs(next_vertex, states)) return false;
      }
    }

    // mark self as visited
    states[start] = State.VISITED;
    // if we have gotten this far, our neighbours haven't found any cycle, return true
    return true;
  }

  const graph = build_graph();
  let states = Array(n).fill(State.TO_VISIT);

  // dfs on each node
  for (let i = 0; i < n; i++) {
    if (!dfs(i, states)) return false;
  }
  return true;
}
