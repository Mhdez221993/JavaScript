class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // method to add an element to the queue
  enqueue(item, priority) {
    const queueElement = { item, priority };
    if (this.isEmpty()) {
      // If the queue is empty we can just add the element
      this.queue.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.queue.length; i++) {
        if (queueElement.priority < this.queue[i].priority) {
          // If the new item's priority is higher, it goes to the right position in the queue
          this.queue.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      // If the item's priority is the lowest, it goes to the end of the queue
      if (!added) {
        this.queue.push(queueElement);
      }
    }
  }

  // method to remove an element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    } else {
      return this.queue.shift();
    }
  }

  // helper method to check if the queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // helper method to print all elements of the queue
  print() {
    var str = "";
    for (var i = 0; i < this.queue.length; i++) str += this.queue[i].item + " ";
    return str;
  }
}

// usage
let pq = new PriorityQueue();
pq.enqueue("Item 1", 1);
pq.enqueue("Item 2", 2);
pq.enqueue("Item 3", 3);
console.log(pq.print()); // Item 1 Item 2 Item 3
pq.enqueue("Item 0", 0);
console.log(pq.print()); // Item 0 Item 1 Item 2 Item 3
pq.dequeue();
console.log(pq.print()); // Item 1 Item 2 Item 3
