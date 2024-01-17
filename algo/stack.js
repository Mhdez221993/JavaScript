class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.count = 0;
  }

  push(item) {
    const newNode = new Node(item);

    newNode.prev = this.top;
    this.top = newNode;

    this.count += 1;

    return this.count;
  }

  pop() {
    if (this.isEmpty()) return undefined;

    const node = this.top;
    this.top = node.prev;

    this.count -= 1;

    return node.val;
  }

  isEmpty() {
    return this.count <= 0;
  }

  peek() {
    if (this.isEmpty()) return undefined;

    return this.top.val;
  }

  length() {
    return this.count;
  }
}

// const stack = new Stack();
// stack.isEmpty();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(3);
// stack.pop();
// console.log(stack.isEmpty());

/* Given a mini program, consisting of a list of stack operations of push, pop, and peek, return the resulting stack after the execution of the program. */
function execute(program) {
  const stack = [];

  for (instruction of program) {
    if (instruction === "peek") {
      console.log(stack[stack.length - 1]);
    } else if (instruction === "pop") {
      stack.pop();
    } else {
      const data = parseInt(instruction.substring(5));
      stack.push(data);
    }
  }

  return stack;
}

const program = [
  "push 3",
  "push 7",
  "push 8",
  "peek",
  "pop",
  "peek",
  "pop",
  "pop",
];

console.log(execute(program));
