class Stack<T> {
  stack: Array<T> = [];

  add(data: T): number {
    this.stack.push(data);
    return this.stack.length;
  }

  remove(): T | undefined {
    return this.stack.pop();
  }

  read(): T | undefined {
    return this.stack[this.stack.length - 1];
  }
}