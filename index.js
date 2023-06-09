class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.head = null;
  }

  enqueue(data, priority) {
    let newNode = new Node(data, priority);
    // if head is null, make the new node as head
    if (this.head === null || this.head.priority > newNode.priority) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // traverse the linked list to find the correct position to insert new node
      let current = this.head;
      while (
        current.next !== null &&
        current.next.priority < newNode.priority
      ) {
        current = current.next;
      }
      // insert new node
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  dequeue() {
    // underflow condition
    if (this.head === null) {
      return null;
    } else {
      // remove head and make next node as head
      let toDequeue = this.head;
      this.head = this.head.next;
      return toDequeue.data;
    }
  }

  peek() {
    if (this.head === null) {
      return null;
    } else {
      return this.head.data;
    }
  }

  isEmpty() {
    return this.head === null;
  }
}

let pq = new PriorityQueue();
pq.enqueue("Item 1", 1);
pq.enqueue("Item 2", 2);
pq.enqueue("Item 3", 3);
console.log(pq.dequeue()); // Item 1
pq.enqueue("Item 0", 0);
console.log(pq.dequeue()); // Item 0
console.log(pq.dequeue()); // Item 1
