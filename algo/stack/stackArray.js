// Stack support 3 operations
//   * Insert (or Push)
//   * Peek (The last item inserted)
//   * Remove (or pop)

class Stack {
  constructor() {
    this.stack = [];
  }

  insert(item) {
    this.stack.push(item);
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.stack[this.stack.length - 1];
  }

  remove() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length == 0;
  }

  size() {
    return this.stack.length;
  }
}

const stack = new Stack();
stack.insert(10);
stack.insert(2);
stack.insert(5);
console.log(stack.size());
console.log(stack.peek());
stack.remove();
console.log(stack.size());
