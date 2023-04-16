class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.len = 0;
  }

  push(value) {
    const newNode = new LinkedList(value);

    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.len++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const valueToRemove = this.top;
    this.top = valueToRemove.next;
    this.len--;

    return valueToRemove;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.top.value;
  }

  isEmpty() {
    return this.len === 0;
  }

  size() {
    return this.len;
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
console.log(stack.size());

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());

stack.pop();
console.log(stack.peek());
