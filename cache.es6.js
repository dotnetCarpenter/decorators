/*Create a function makeCaching(f) which takes a one-argument function f(arg), and makes a wrapper over it which caches calls.

The wrapper should have a static flush() method to flush the cache.

Function f is allowed to have only one argument.
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function work(...args) {
	return args.reduce((a, b) => a + Math.random() * b, Math.random());
}
function makeCaching(f) {
	let cache = {};

	decorator.flush = () => {
		forEach(cache, v => {
			v = undefined;
		}); // explicit set values = null for complicated environment GC
		cache = {}; // create a new object
	};
	function decorator(...args) {
		const key = args.join("@");
		return cache[key] ? cache[key] : cache[key] = f(...args), cache[key];
	}
	return decorator;
}
// No modifications of work are allowed. Your code should reside only in makeCaching.

function forEach(collection, f) {
	for (let item in collection) f(item);
}

exports.makeCaching = makeCaching;
exports.work = work;
