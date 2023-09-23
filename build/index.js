"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = exports.random = exports.doMath = exports.hello = void 0;
function hello() {
    return 'Hello World';
}
exports.hello = hello;
function doMath(a, b) {
    return a * b;
}
exports.doMath = doMath;
function random(n) {
    return Math.floor(Math.random() * n);
}
exports.random = random;
function greet(name) {
    return "Hello ".concat(name);
}
exports.greet = greet;
