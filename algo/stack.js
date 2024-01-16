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

const stack = new Stack();
stack.isEmpty();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(3);
stack.pop();
console.log(stack.isEmpty());
