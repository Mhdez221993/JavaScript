class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    this.count--;
    const RemvoedElement = this.items[this.count];
    delete this.items[this.count];

    return element;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
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
console.log(stack.size());
