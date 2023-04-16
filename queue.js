class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty) {
      return null;
    }

    return this.elements;
  }

  isEmpty() {
    return this.items.length < 1;
  }
}
