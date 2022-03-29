"use strict";

var _tap = _interopRequireDefault(require("tap"));

var _logger = _interopRequireDefault(require("../src/logger.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function work(a, b) {
  /* arbitrary code */
}

_tap.default.test("logging", t => {
  t.plan(1);
  const actual = [];
  const expected = ['work is called with 1,2', 'work is called with 5,6'];
  work = (0, _logger.default)(work, msg => actual.push(msg)); // now work should log it's calls somewhere

  work(1, 2);
  work(5, 6);
  work.outputLog(); // <-- should call our log handler

  t.match(actual, expected, `should be an array like: "${expected}"`);
});

_tap.default.test("logging with anonymous function", t => {
  t.plan(1);
  const actual = [];
  const expected = ['anonymous is called with 1,2', 'anonymous is called with 5,6'];
  const a = (0, _logger.default)((a, b) => {
    /* arbitrary code */
  }, msg => actual.push(msg)); // now a should log it's calls somewhere

  a(1, 2);
  a(5, 6);
  a.outputLog(); // <-- should call our log handler

  t.match(actual, expected, `should be an array like: "${expected}"`);
});

_tap.default.test("logging with default logger", t => {
  t.plan(1);
  work = (0, _logger.default)(work);
  work(1, 2);
  work(5, 6);
  t.doesNotThrow(work.outputLog, "should not throw when using console.log");
});
