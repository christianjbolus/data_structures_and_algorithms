import { Stack } from './Stack'

export class BracketValidator {
  stack: Stack<string>
  constructor() {
    this.stack = new Stack()
  }

  validate(str: string): boolean {
    for (let char of str) {
      if (this.isOpeningBracket(char)) {
        this.stack.add(char)
      } else if (this.isClosingBracket(char)) {
        let poppedBracket = this.stack.remove()
        // If the popped bracket does match the closing bracket or is undefined,
        // we have an invalid/missing opening bracket
        if (!this.isBracketMatch(poppedBracket, char)) {
          return false
        }
      }
    }
    // If the stack in not empty at the end of the loop, we have a missing closing bracket
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