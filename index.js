const bt = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
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
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

var connect = function (root) {
  if (root == null) return null;

  let queue = [root];
  while (queue.length > 0) {
    let levelSize = queue.length;
    let prevNode = null;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      if (prevNode != null) prevNode.next = node;
      prevNode = node;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // End of level, set last node's next to null
    if (prevNode != null) prevNode.next = null;
  }

  return root;
};

traverse(bt);
console.log(bt);
