/*
Create a function makeCaching(f) which takes a one-argument function f(arg),
and makes a wrapper over it which caches calls.
The wrapper should have a static flush() method to flush the cache.
Function f is allowed to have only one argument.
Since we have the spread operator we accept multiple arguments
as an array - hence it's still a single argument.
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function makeCaching(f, context) {
  const cache = new Map();
  decorator.flush = cache.clear.bind(cache);

  function decorator(...args) {
    const key = JSON.stringify(args);
    return cache.has(key) ? cache.get(key) : cache.set(key, context ? f.call(context, ...args) : f(...args)) // context switching is expensive so we only do it if necessary
    .get(key);
  }

  return decorator;
} // No modifications of work are allowed. Your code should reside only in makeCaching.


var _default = makeCaching;
exports.default = _default;
