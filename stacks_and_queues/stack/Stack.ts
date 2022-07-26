// Generic Stack class of type 'any'

class Stack {
  stack: Array<any> = [];

  add(data) {
    this.stack.push(data);
  }

  remove() {
    return this.stack.pop();
  }

  read() {
    return this.stack[this.stack.length - 1];
  }
}