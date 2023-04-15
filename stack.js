class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length < 1;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
stack.push(1);
stack.push(4);
console.log(stack.isEmpty());
console.log(stack.peek());
