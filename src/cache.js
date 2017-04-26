/*
Create a function makeCaching(f) which takes a one-argument function f(arg),
and makes a wrapper over it which caches calls.
The wrapper should have a static flush() method to flush the cache.
Function f is allowed to have only one argument.
Since we have the spread operator we accept multiple arguments
as an array - hence it's still a single argument.
*/
"use strict"

function makeCaching(f) {
	const cache = new Map()

	decorator.flush = cache.clear.bind(cache)

	function decorator(...args) {
		const key = JSON.stringify(args)
		return cache.has(key) ?
			cache.get(key) :
				cache.set(key, f(...args))
					.get(key)
	}
	return decorator
}
// No modifications of work are allowed. Your code should reside only in makeCaching.

export default makeCaching
