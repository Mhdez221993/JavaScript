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
    return this.stack[this.stack.length - 1];
  }

  remove() {
    return this.stack.pop();
  }
}

const stack = new Stack();
stack.insert(1);
stack.insert(2);
stack.insert(3);
console.log(stack.peek());
stack.remove();
console.log(stack.peek());
