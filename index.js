var connect = function (root) {
  if (!root) return null;

  function dfs(root) {
    if (!root) return null;

    if (root.right) root.right.next = getNext(root);
    if (root.left) root.left.next = root.right ? root.right : getNext(root);

    dfs(root.right);
    dfs(root.left);
  }

  dfs(root);
  return root;
};

function getNext(node) {
  while (node.next) {
    if (node.next.left) return node.next.left;
    if (node.next.right) return node.next.right;

    node = node.next;
  }
  return null;
}

let root = {
  val: 1,
  next: null,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: { val: 7, left: null, right: null },
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: null,
  },
};

console.log(connect(root));
