export class Stack<T> {
  stack: Array<T> = [];

  add(val: T) {
    this.stack.push(val);
  }

  remove(): T | undefined {
    return this.stack.pop();
  }

  read(): T | undefined {
    return this.stack[this.stack.length - 1];
  }
}