class Stack {
  stack: string[] = [];

  add(str: string) {
    this.stack.push(str);
  }

  remove(): string {
    return this.stack.pop();
  }

  read(): string | undefined {
    return this.stack[this.stack.length - 1];
  }
}

class BracketValidator {
  constructor(public stack: Stack) {
    this.stack = new Stack()
  }
}