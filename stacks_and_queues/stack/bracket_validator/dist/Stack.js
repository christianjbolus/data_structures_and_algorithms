"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.add = function (val) {
        this.stack.push(val);
    };
    Stack.prototype.remove = function () {
        return this.stack.pop();
    };
    Stack.prototype.read = function () {
        return this.stack[this.stack.length - 1];
    };
    return Stack;
}());
exports.Stack = Stack;
