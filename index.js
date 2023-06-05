function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

var cloneGraph = function (node) {
  if (!node) return node;

  let map = new Map();
  let queue = [node];
  map.set(node, new Node(node.val, []));

  while (queue.length > 0) {
    let currNode = queue.shift();
    for (let neighbor of currNode.neighbors) {
      if (!map.get(neighbor)) {
        map.set(neighbor, new Node(neighbor.val, []));
        queue.push(neighbor);
      }

      map.get(currNode).neighbors.push(map.get(neighbor));
    }
  }

  return map.get(node);
};
