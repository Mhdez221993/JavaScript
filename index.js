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

// ------------------------------------------

function serialize_dfs(root, res) {
  if (!root) {
    res.push("x");
    return;
  }

  res.push(root.val);

  serialize_dfs(root.left, res);
  serialize_dfs(root.right, res);
}

function serialize(root) {
  const res = [];
  serialize_dfs(root, res);
  return res.join(" ");
}

let s = "5 4 3 x x 8 x x 6 x x";
const root = deserialize(s);

// const serialized = serialize(root);

function* print(root) {
  if (!root) {
    yield "x";
  } else {
    yield root.val;
    yield* print(root.left);
    yield* print(root.right);
  }
}

console.log(Array.from(print(root)));
