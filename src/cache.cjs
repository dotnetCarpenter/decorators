/*
Create a function memoize (f) which takes function f (arg),
and makes a wrapper over it which caches calls.
The wrapper should have a static flush() method to flush the cache.
*/
"use strict";
/**
 *
 * @param {function} f
 * @param {object} context
 * @returns
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function memoize(f, context) {
  const cache = new Map();
  decorator.flush = cache.clear.bind(cache);

  function decorator(...args) {
    const key = JSON.stringify(args);
    return cache.has(key) ? cache.get(key) : cache.set(key, context ? f.call(context, ...args) // context switching is expensive so we only do it if necessary
    : f(...args)).get(key);
  }

  return decorator;
} // No modifications of work are allowed. Your code should reside only in memoize.


var _default = memoize;
exports.default = _default;
