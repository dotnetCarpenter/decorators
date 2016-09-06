"use strict";

var _tap = require("tap");

var tap = _interopRequireWildcard(_tap);

var _logger = require("../src/logger.es6");

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function work(a, b) {/* arbitrary function */}

tap.test("logging", t => {
	t.plan(1);
	const actual = [];
	const expected = ['work is called with 1,2', 'work is called with 5,6'];

	work = (0, _logger2.default)(work, msg => actual.push(msg));
	// now work should log it's calls somewhere
	work(1, 2);
	work(5, 6);
	work.outputLog(); // <-- should call our log handler

	t.like(actual, expected, `should be an array like: "${ expected }"`);
});

tap.test("logging with default logger", t => {
	t.plan(1);

	work = (0, _logger2.default)(work);
	work(1, 2);
	work(5, 6);

	t.notThrow(work.outputLog, "should not throw when using console.log");
});
