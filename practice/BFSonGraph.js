function breadthFirstSearch(graph, source) {
  if (!graph.hasOwnProperty(source)) {
    return [];
  }

  let visited = new Set();
  let res = [];
  const q = new Queue();
  q.enqueue(source);
  visited.add(source);

  while (!q.isEmpty()) {
    let currNode = q.dequeue();
    let neightbors = graph[currNode];
    res.push(currNode);

    for (let i = 0; i < neightbors.length; i++) {
      if (!visited.has(neightbors[i])) visited.add(neightbors[i]);
      q.enqueue(neightbors[i]);
    }
  }

  return res;
}

/*  Auxiliary classes */

/**
 * A Queue class with O(1) enqueue and dequeue is provided for you.
 * You can use it directly should you wish to.
 *
 * Example usage:
 * const q = new Queue();
 * q.enqueue('a');
 * q.enqueue('b');
 * q.dequeue(); //'a'
 * q.isEmpty(); // False
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(item) {
    const newNode = new Node(item);
    if (this.isEmpty()) {
      this.head = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    if (this.isEmpty() || !this.head) {
      return null;
    } else {
      const removedNode = this.head;
      this.head = this.head.next;
      removedNode.next = null;
      this.length--;
      if (this.isEmpty()) {
        this.tail = null;
      }
      return removedNode.value;
    }
  }
}

const graph1 = {
  A: ["B", "C", "D"],
  B: ["E", "F"],
  C: ["G", "H"],
  D: ["I", "J"],
  E: ["D"],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
};

console.log(breadthFirstSearch(graph1, "A")); // ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
/*
        A
      / | \
     B  C  D
   / |   |   | \
  E  F   G   H  I
         |
         J
*/
