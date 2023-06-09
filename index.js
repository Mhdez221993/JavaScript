class HeapItem {
  constructor(item, priority = item) {
    this.item = item;
    this.priority = priority;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(item) {
    this.heap.push(item);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let child = this.heap[index];
      let parent = this.heap[parentIdx];

      if (parent.priority <= child.priority) break;

      this.heap[index] = parent;
      this.heap[parentIdx] = child;
      index = parentIdx;
    }
  }

  pop() {
    let element = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.bubbleDown();
    return element;
  }

  bubbleDown() {
    let n = this.heap.length;
    let index = 0;
    let min = 0;

    while (index < n) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      if (
        (left < n && this.heap[left].priority < this.heap[min].priority) ||
        (right < n && this.heap[right].priority < this.heap[min].priority)
      ) {
        if (right < n) {
          min =
            this.heap[left].priority <= this.heap[right].priority
              ? left
              : right;
        } else {
          min = left;
        }
      }

      if (min === index) break;
      [this.heap[index], this.heap[min]] = [this.heap[min], this.heap[index]];
      index = min;
    }
  }
}

function heapTop3(arr) {
  let minHeap = new MinHeap();

  for (let n of arr) {
    minHeap.push(new HeapItem(n));
  }

  let res = [];
  for (let i = 0; i < 3; i++) res.push(minHeap.pop().item);

  return res;
}
