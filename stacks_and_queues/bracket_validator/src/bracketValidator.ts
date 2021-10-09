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

export class BracketValidator {
  stack: Stack
  constructor() {
    this.stack = new Stack()
  }

  validate(str: string): boolean {
    for (let char of str) {
      if (this.isOpeningBracket(char)) {
        this.stack.add(char)
      } else if (this.isClosingBracket(char)) {
        let poppedBracket = this.stack.remove()
        if (!this.isBracketMatch(poppedBracket, char)) {
          return false
        }
      }
    }
    if (this.stack.read()) {
      return false
    }
    return true
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