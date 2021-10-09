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

  private isOpeningBracket(char: string): boolean {
    return ['{', '[', '('].includes(char)
  }

  private isClosingBracket(char: string): boolean {
    return ['}', ']', ')'].includes(char)
  }

  private isBracketMatch(openingBracket: string, char: string): boolean {
    return char === { '{' : '}', '[': ']', '(': ')'}[openingBracket]
  }
}