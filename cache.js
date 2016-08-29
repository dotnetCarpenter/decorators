/*Create a function makeCaching(f) which takes a one-argument function f(arg), and makes a wrapper over it which caches calls.

The wrapper should have a static flush() method to flush the cache.

Function f is allowed to have only one argument.
*/
"use strict"

function work(arg) { return Math.random()*arg }
function makeCaching(f) {
	let cache = []

	decorator.flush = () => {
		cache.forEach( (v) => { v = undefined } ) // explicit set values = null for complicated environment GC
		cache = [] // create a new array
	}
	function decorator(oneArg) {
		return cache[oneArg] ?
			cache[oneArg] :
				cache[oneArg] = f(oneArg),
				cache[oneArg]
	}
	return decorator
}
// No modifications of work are allowed. Your code should reside only in makeCaching.

export {
	makeCaching,
	work
}