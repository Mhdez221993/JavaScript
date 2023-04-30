class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function lcaOnBst(bst, p, q) {
  if (!bst) return null;

  if (bst.val < p && bst.val < q) {
    return lcaOnBst(bst.right, p, q);
  } else if (bst.val > p && bst.val > q) {
    return lcaOnBst(bst.left, p, q);
  } else {
    return bst.val;
  }
}
