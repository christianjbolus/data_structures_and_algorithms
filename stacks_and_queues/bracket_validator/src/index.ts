import { BracketValidator } from './bracketValidator'
import { validJS, invalidJS } from './testStrings'

const validator = new BracketValidator()

console.log(validator.validate(validJS))
console.log(validator.validate(invalidJS))