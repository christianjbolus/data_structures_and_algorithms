"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BracketValidator = void 0;
var Stack_1 = require("./Stack");
var BracketValidator = /** @class */ (function () {
    function BracketValidator() {
        this.stack = new Stack_1.Stack();
    }
    BracketValidator.prototype.validate = function (str) {
        for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
            var char = str_1[_i];
            if (this.isOpeningBracket(char)) {
                this.stack.add(char);
            }
            else if (this.isClosingBracket(char)) {
                var poppedBracket = this.stack.remove();
                if (!this.isBracketMatch(poppedBracket, char)) {
                    return false;
                }
            }
        }
        if (this.stack.read()) {
            return false;
        }
        return true;
    };
    BracketValidator.prototype.isOpeningBracket = function (char) {
        return ['{', '[', '('].includes(char);
    };
    BracketValidator.prototype.isClosingBracket = function (char) {
        return ['}', ']', ')'].includes(char);
    };
    BracketValidator.prototype.isBracketMatch = function (openingBracket, char) {
        return char === { '{': '}', '[': ']', '(': ')' }[openingBracket];
    };
    return BracketValidator;
}());
exports.BracketValidator = BracketValidator;
