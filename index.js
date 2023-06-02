var isSameTree = function (p, q) {
  let queueP = [p];
  let queueQ = [q];

  while (queueP.length > 0 && queueQ.length > 0) {
    console.log(queueP, queueQ);
    let nodeP = queueP.shift();
    let nodeQ = queueQ.shift();

    if (nodeP != nodeQ) return false;
    if (nodeP.val !== nodeQ.val) return false;

    queue;
  }

  return queueP.length === 0 && queueQ.length === 0;
};

let root1 = {
  val: 1,
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

let root2 = {
  val: 1,
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

console.log(isSameTree(root1, root2));
