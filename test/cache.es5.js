"use strict";

var _tap = require("tap");

var tap = _interopRequireWildcard(_tap);

var _cache = require("../src/cache.es5");

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function work(...args) {
	return args.reduce((a, b) => a + Math.random() * b, Math.random());
}

tap.test("simple caching", t => {
	t.plan(2);

	const memWork = (0, _cache2.default)(work);
	let a = memWork(1);
	let b = memWork(1);

	t.ok(a == b, "a == b should be true (cached)"); // true (cached)
	memWork.flush(); // clears the cache
	b = memWork(1);
	t.not(a == b, "a == b should be false"); // false
});

tap.test("dyadic caching", t => {
	t.plan(3);

	const memWork = (0, _cache2.default)(work);
	let a = memWork(2, 4);
	let b = memWork(2, 4);

	t.ok(a == b, "a == b should be true (cached)"); // true (cached)

	b = memWork(2, 4.2);
	t.not(a == b, "a == b should be false");

	memWork.flush(); // clears the cache
	b = memWork(2, 4);
	t.not(a == b, "a == b should be false"); // false
});

tap.test("triadic caching", t => {
	t.plan(3);

	const memWork = (0, _cache2.default)(work);
	let a = memWork(5, 7, 2);
	let b = memWork(5, 7, 2);

	t.ok(a == b, "a == b should be true (cached)"); // true (cached)

	b = memWork(1, 4.2, 41);
	t.not(a == b, "a == b should be false");

	memWork.flush(); // clears the cache
	b = memWork(1, 4.2, 41);
	t.not(a == b, "a == b should be false"); // false
});
