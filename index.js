class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function dfs(nodes) {
  const val = nodes.next().value;

  if (val === "x") return null;

  let newNode = new Node(parseInt(val, 10));

  newNode.left = dfs(nodes);
  newNode.right = dfs(nodes);

  return newNode;
}

function deserialize(s) {
  return dfs(s.split(" ")[Symbol.iterator]());
}

let s = "5 4 3 x x 8 x x 6 x x";
console.log(deserialize(s));
