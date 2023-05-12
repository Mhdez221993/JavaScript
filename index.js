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

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    const newNode = new Node(item);

    newNode.prev = this.top;
    this.top = newNode;

    this.count += 1;

    return this.count;
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    if (this.isEmpty()) return undefined;

    const node = this.top;
    this.top = this.top.prev;

    this.count -= 1;

    return node.val;
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return this.count === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    if (this.isEmpty()) return undefined;

    return this.top.val;
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return this.count;
  }
}

const s = new Stack();
console.log(s);
console.log(s.length());
