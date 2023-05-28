function serialize(root) {
  let res = [];
  serialize_dfs(root, res);
  return res.join(" ");
}

function serialize_dfs(root, res) {
  if (!root) {
    res.push("x");
    return;
  }
  res.push(root.val);
  serialize_dfs(root.left, res);
  serialize_dfs(root.right, res);
}

function deserialize(s) {
  // create an iterator that returns a token each time we call `next`
  return deserialize_dfs(s.split(" ")[Symbol.iterator]());
}

function deserialize_dfs(nodes) {
  let val = nodes.next().value;
  if (val === "x") return;
  const cur = new Node(parseInt(val, 10));
  cur.left = deserialize_dfs(nodes);
  cur.right = deserialize_dfs(nodes);
  return cur;
}

let tree = {
  value: 5,
  left: {
    value: 4,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    value: 6,
    right: {
      value: 8,
      left: null,
      right: null,
    },
  },
};

console.log(treeMaxDepth(tree));
