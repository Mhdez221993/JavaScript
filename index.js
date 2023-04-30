function lca(root, node1, node2) {
  if (!root) return;

  if (root === node1 || root === node2) return root;

  let left = lca(root.left, node1, node2);
  let right = lca(root.right, node1, node2);

  if (left && right) return root;

  return left || right;
}

let root = {
  val: 6,
  left: {
    val: 4,
    left: { val: 3, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
  right: { val: 8, left: null, right: null },
};

let node1 = root.left.left;
let node2 = root.left.right;

console.log(lca(root, node1, node2));
