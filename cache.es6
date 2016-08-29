/*Create a function makeCaching(f) which takes a one-argument function f(arg), and makes a wrapper over it which caches calls.

The wrapper should have a static flush() method to flush the cache.

Function f is allowed to have only one argument.
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.work = exports.makeCaching = undefined;

var _tap = require("tap");

var tap = _interopRequireWildcard(_tap);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function work(arg) {
	return Math.random() * arg;
}
function makeCaching(f) {
	var cache = [];

	decorator.flush = function () {
		/*cache.forEach( (v) = { v = undefined } ) // explicit set values = null for stupid gc*/
		cache = []; // create a new array
	};
	function decorator(oneArg) {
		return cache[oneArg] ? cache[oneArg] : cache[oneArg] = f(oneArg), cache[oneArg];
	}
	return decorator;
}

exports.work = work = makeCaching(work);

var a = work(1);

var b = work(1);

/*console.log( a == b, "a == b should be true (cached)" ) // true (cached)
work.flush()    // clears the cache
b = work(1)
console.log( a == b, "a == b should be false" ) // false
*/
tap.test("caching", function (t) {
	t.plan(2);

	t.ok(a == b, "a == b should be true (cached)"); // true (cached)
	work.flush(); // clears the cache
	b = work(1);
	t.not(a == b, "a == b should be false"); // false
});
// No modifications of work are allowed. Your code should reside only in makeCaching.

exports.makeCaching = makeCaching;
exports.work = work;
