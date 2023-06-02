function printTree(tree) {
  if (!tree) return [];
  let res = [];
  let queue = [tree];

  while (queue.length > 0) {
    let node = queue.shift();
    res.push(node.value);

    for (let child of node.children) {
      queue.push(child);
    }
  }

  return res;
}

let tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 4,
          children: [],
        },
        {
          value: 5,
          children: [],
        },
      ],
    },
    {
      value: 3,
      children: [
        {
          value: 6,
          children: [],
        },
      ],
    },
  ],
};

console.log(printTree(tree));
