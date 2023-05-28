var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if ((p && !q) || (!p && q)) return false;

  if (q.val !== p.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const p = {
  val: 2,
  left: { val: 1, left: null, right: null },
  right: { val: 3, left: { val: 4, left: null, right: null }, right: null },
};

const q = {
  val: 2,
  left: { val: 1, left: null, right: null },
  right: null,
};

console.log(isSameTree(p, q));
