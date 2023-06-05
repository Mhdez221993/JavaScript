var cloneGraphDFS = function (node, map = new Map()) {
  if (!node) return null;

  if (map.has(node)) return map.get(node);

  let cloneNode = new Node(node.val, []);

  map.set(node, cloneNode);

  for (let neighbor of node.neighbors) {
    cloneNode.neighbors.push(cloneGraph(neighbor, map));
  }

  return cloneNode;
};
