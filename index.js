function lcaOnBst(bst, p, q) {
  if (p < bst.val && q < bst.val) {
    return lcaOnBst(bst.left, p, q);
  } else if (p > bst.val && q > bst.val) {
    return lcaOnBst(bst.right, p, q);
  } else {
    return bst.val;
  }
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

console.log(lcaOnBst(tree, 6, 8));
