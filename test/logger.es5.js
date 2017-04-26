"use strict";

var _tap = require("tap");

var tap = _interopRequireWildcard(_tap);

var _logger = require("../src/logger.es5");

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

	t.like(actual, expected, `should be an array like: "${expected}"`);
});

tap.test("logging with default logger", t => {
	t.plan(1);

	work = (0, _logger2.default)(work);
	work(1, 2);
	work(5, 6);

	t.notThrow(work.outputLog, "should not throw when using console.log");
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7SUFBWSxHOztBQUNaOzs7Ozs7OztBQUVBLFNBQVMsSUFBVCxDQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBRSx3QkFBMEI7O0FBRS9DLElBQUksSUFBSixDQUFTLFNBQVQsRUFBb0IsS0FBSztBQUN4QixHQUFFLElBQUYsQ0FBTyxDQUFQO0FBQ0EsT0FBTSxTQUFTLEVBQWY7QUFDQSxPQUFNLFdBQVcsQ0FBRSx5QkFBRixFQUE2Qix5QkFBN0IsQ0FBakI7O0FBRUEsUUFBTyxzQkFBWSxJQUFaLEVBQWtCLE9BQU8sT0FBTyxJQUFQLENBQVksR0FBWixDQUF6QixDQUFQO0FBQ0E7QUFDQSxNQUFLLENBQUwsRUFBTyxDQUFQO0FBQ0EsTUFBSyxDQUFMLEVBQU8sQ0FBUDtBQUNBLE1BQUssU0FBTCxHQVR3QixDQVNQOztBQUVqQixHQUFFLElBQUYsQ0FBTyxNQUFQLEVBQWUsUUFBZixFQUEwQiw2QkFBNEIsUUFBUyxHQUEvRDtBQUNBLENBWkQ7O0FBY0EsSUFBSSxJQUFKLENBQVMsNkJBQVQsRUFBd0MsS0FBSztBQUM1QyxHQUFFLElBQUYsQ0FBTyxDQUFQOztBQUVBLFFBQU8sc0JBQVksSUFBWixDQUFQO0FBQ0EsTUFBSyxDQUFMLEVBQU8sQ0FBUDtBQUNBLE1BQUssQ0FBTCxFQUFPLENBQVA7O0FBRUEsR0FBRSxRQUFGLENBQVcsS0FBSyxTQUFoQixFQUEyQix5Q0FBM0I7QUFDQSxDQVJEIiwiZmlsZSI6ImxvZ2dlci5lczUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgKiBhcyB0YXAgZnJvbSBcInRhcFwiXG5pbXBvcnQgbWFrZUxvZ2dpbmcgZnJvbSBcIi4uL3NyYy9sb2dnZXIuZXM1XCJcblxuZnVuY3Rpb24gd29yayhhLGIpIHsgLyogYXJiaXRyYXJ5IGZ1bmN0aW9uICovIH1cblxudGFwLnRlc3QoXCJsb2dnaW5nXCIsIHQgPT4ge1xuXHR0LnBsYW4oMSlcblx0Y29uc3QgYWN0dWFsID0gW11cblx0Y29uc3QgZXhwZWN0ZWQgPSBbICd3b3JrIGlzIGNhbGxlZCB3aXRoIDEsMicsICd3b3JrIGlzIGNhbGxlZCB3aXRoIDUsNicgXVxuXG5cdHdvcmsgPSBtYWtlTG9nZ2luZyh3b3JrLCBtc2cgPT4gYWN0dWFsLnB1c2gobXNnKSlcblx0Ly8gbm93IHdvcmsgc2hvdWxkIGxvZyBpdCdzIGNhbGxzIHNvbWV3aGVyZVxuXHR3b3JrKDEsMilcblx0d29yayg1LDYpXG5cdHdvcmsub3V0cHV0TG9nKCkgLy8gPC0tIHNob3VsZCBjYWxsIG91ciBsb2cgaGFuZGxlclxuXG5cdHQubGlrZShhY3R1YWwsIGV4cGVjdGVkLCBgc2hvdWxkIGJlIGFuIGFycmF5IGxpa2U6IFwiJHtleHBlY3RlZH1cImApXG59KVxuXG50YXAudGVzdChcImxvZ2dpbmcgd2l0aCBkZWZhdWx0IGxvZ2dlclwiLCB0ID0+IHtcblx0dC5wbGFuKDEpXG5cblx0d29yayA9IG1ha2VMb2dnaW5nKHdvcmspXG5cdHdvcmsoMSwyKVxuXHR3b3JrKDUsNilcblxuXHR0Lm5vdFRocm93KHdvcmsub3V0cHV0TG9nLCBcInNob3VsZCBub3QgdGhyb3cgd2hlbiB1c2luZyBjb25zb2xlLmxvZ1wiKVxufSlcbiJdfQ==