# Priority Queue / Heap

#### K-Messed Array Sort
Write an efficient function called sortKMessedArray that sorts an array of integers arr, where each element is displaced by at most k positions from its sorted position.
```js
/*
input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2

output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

function sortKMessedArray(arr, k) {
  const minHeap = new MinHeap(arr.slice(0, k + 1));

  for (let i = 0; i < arr.length; i++) {
    if (i + k + 1 < arr.length) {
      minHeap.insert(arr[i + k + 1]);
    }
    arr[i] = minHeap.extractMin();
  }

  return arr;
}

class MinHeap {
  constructor(arr) {
    this.heap = this.buildHeap(arr);
  }

  buildHeap(arr) {
    const firstParentIdx = Math.floor((arr.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, arr.length - 1, arr);
    }
    return arr;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  swap(i, j, heap) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  extractMin() {
    this.swap(0, this.heap.length - 1, this.heap);
    const min = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return min;
  }
}
```