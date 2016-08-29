/*Create a function makeCaching(f) which takes a one-argument function f(arg), and makes a wrapper over it which caches calls.

The wrapper should have a static flush() method to flush the cache.

Function f is allowed to have only one argument.
*/
"use strict"

/*import * as tap from "tap"*/

function work(arg) { return Math.random()*arg }
function makeCaching(f) {
	let cache = []

	decorator.flush = () => {
		/*cache.forEach( (v) = { v = undefined } ) // explicit set values = null for stupid gc*/
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

work = makeCaching(work);

var a = work(1);

var b = work(1);

console.log( a == b, "a == b should be true (cached)" ) // true (cached)
work.flush()    // clears the cache
b = work(1)
console.log( a == b, "a == b should be false" ) // false

/*tap.test("caching", (t) => {
t.plan(2)

t.ok( a == b, "a == b should be true (cached)" ) // true (cached)
	work.flush()    // clears the cache
	b = work(1)
	t.not( a == b, "a == b should be false" ) // false
})*/
// No modifications of work are allowed. Your code should reside only in makeCaching.

export {
	makeCaching,
	work
}