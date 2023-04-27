class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let arr = [1, 2, 3, 4, 5];
let root;
let tail;

for (let i of arr) {
  if (!root) {
    root = new LinkedList(i);
    tail = root;
  }

  tail.next = new LinkedList(i);
  tail = tail.next;
}

function findMidNode(root) {
  let fast = root;
  let slow = root;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
}

console.log(findMidNode(root));
