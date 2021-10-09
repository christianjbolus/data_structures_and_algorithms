"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bracketValidator_1 = require("./bracketValidator");
var testStrings_1 = require("./testStrings");
var validator = new bracketValidator_1.BracketValidator();
console.log(validator.validate(testStrings_1.validJS));
console.log(validator.validate(testStrings_1.invalidJS));
