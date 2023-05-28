function find(tree, val) {
  if (!tree) return false;
  if (tree.val === val) return true;
  else if (tree.val > val) return find(tree.left, val);
  else return find(tree.right, val);
}

let tree = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 6,
    right: {
      val: 8,
      left: null,
      right: null,
    },
  },
};

console.log(find(tree, 22));
