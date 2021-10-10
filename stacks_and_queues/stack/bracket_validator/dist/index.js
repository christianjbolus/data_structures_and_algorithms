"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BracketValidator_1 = require("./BracketValidator");
var testStrings_1 = require("./testStrings");
var validator = new BracketValidator_1.BracketValidator();
console.log(validator.validate(testStrings_1.validJS));
console.log(validator.validate('function )'));
