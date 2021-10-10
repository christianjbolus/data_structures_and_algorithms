// Generic Queue class of type 'any'

class Queue {
  queue = [];

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    return this.queue.shift();
  }

  read() {
    return this.queue[0];
  }
}
