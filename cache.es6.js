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
	const cache = new Map();

	/*cache.get = seekKey => {
 	let currentKey
 	return some(cache.keys(), cacheKey => {
 		currentKey = cacheKey
 		return seekKey === cacheKey
 	}) ? currentKey : null
 }*/

	decorator.flush = cache.clear.bind(cache); /*() => {
                                            forEach(cache, v => { v = undefined } ) // explicit set values = null for complicated environment GC
                                            cache = {} // create a new object
                                            }*/

	function decorator(...args) {
		const key = args.join("@");
		return cache.has(key) ? cache.get(key) : cache.set(key, f(...args)).get(key);
	}
	return decorator;
}
// No modifications of work are allowed. Your code should reside only in makeCaching.
function some(collection, f) {
	for (let item of collection) if (f(item)) return true;
	return false;
}

/*function forEach(collection, f) {
	for(let item of collection)
		f(item)
}*/

exports.makeCaching = makeCaching;
exports.work = work;
