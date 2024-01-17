// Using a linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class QueueWithLinkedList {
  constructor() {
    this.root = null;
    this.current = null;
    this.count = 0;
  }

  enqueue(item) {
    const newNode = new Node(item);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.current.next = newNode;
    }

    this.current = newNode;

    this.count += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("No element to remove, the stack is empty");
      return undefined;
    }

    const newRoot = this.root.next;
    this.root = newRoot;
    this.count -= 1;

    if (!this.root) {
      this.current = null;
    }
  }

  isEmpty() {
    return this.count <= 0;
  }

  print() {
    console.log(this.root);
  }
}

// const queue = new QueueWithLinkedList();
// queue.enqueue(5);
// queue.enqueue(10);
// queue.dequeue();
// queue.dequeue();
// queue.print();

// Using two stacks
class QueueWithTwoStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(item) {
    this.inStack.push(item);
  }

  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }

    if (this.outStack.length === 0) {
      throw new Error("Queue is empty");
    }

    return this.outStack.pop();
  }

  peek() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }

    if (this.outStack.length === 0) {
      throw new Error("Queue is Empty");
    }

    return this.outStack[this.outStack.length - 1];
  }
}

const queue = new QueueWithTwoStacks();
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(9);
queue.dequeue();
console.log(queue.peek());
