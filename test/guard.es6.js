"use strict";

var _tap = require("tap");

var tap = _interopRequireWildcard(_tap);

var _guard = require("../src/guard.es6");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function devide(a, b) {
	return a / b;
}

tap.test("guard for zero", t => {
	t.plan(2);

	const guardedDevide = (0, _guard.guard)(devide, _guard.guards.zero(1));

	t.notThrow(guardedDevide.bind(null, 5, 1), "should not throw with an input of 5,1");
	t.throw(guardedDevide.bind(null, 5, 0), new TypeError(), "should throw with an input of 5,0");
});

tap.test("guard for zero with custom error message", t => {
	t.plan(1);

	const expected = new TypeError("Don't call devide with zero");

	const guardedDevide = (0, _guard.guard)(devide, _guard.guards.zero(1, expected));

	t.throw(guardedDevide.bind(null, 5, 0), expected, "should throw a custom error");
});
