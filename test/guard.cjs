"use strict";

var _tap = _interopRequireDefault(require("tap"));

var _guard = require("../src/guard.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function divide(a, b) {
  return a / b;
}

_tap.default.test("guard for zero", t => {
  t.plan(2);
  const guardedDivide = (0, _guard.guard)(divide, _guard.guards.zero(1));
  t.doesNotThrow(guardedDivide.bind(null, 5, 1), "should not throw with an input of 5,1");
  t.throws(guardedDivide.bind(null, 5, 0), new TypeError(), "should throw with an input of 5,0");
});

_tap.default.test("guard for zero with custom error message", t => {
  t.plan(1);
  const expected = new TypeError("Don't call divide with zero");
  const guardedDivide = (0, _guard.guard)(divide, _guard.guards.zero(1, expected));
  t.throws(guardedDivide.bind(null, 5, 0), expected, "should throw a custom error");
});
