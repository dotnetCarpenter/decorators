"use strict";

var _tap = require("tap");

var tap = _interopRequireWildcard(_tap);

var _guard = require("../src/guard.es5");

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1YXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztJQUFZLEc7O0FBQ1o7Ozs7QUFFQSxTQUFTLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0I7QUFDckIsUUFBTyxJQUFFLENBQVQ7QUFDQTs7QUFFRCxJQUFJLElBQUosQ0FBUyxnQkFBVCxFQUEyQixLQUFLO0FBQy9CLEdBQUUsSUFBRixDQUFPLENBQVA7O0FBRUEsT0FBTSxnQkFBZ0Isa0JBQU0sTUFBTixFQUFjLGNBQU8sSUFBUCxDQUFZLENBQVosQ0FBZCxDQUF0Qjs7QUFFQSxHQUFFLFFBQUYsQ0FBVyxjQUFjLElBQWQsQ0FBbUIsSUFBbkIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBWCxFQUEyQyx1Q0FBM0M7QUFDQSxHQUFFLEtBQUYsQ0FBUSxjQUFjLElBQWQsQ0FBbUIsSUFBbkIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBUixFQUF3QyxJQUFJLFNBQUosRUFBeEMsRUFBeUQsbUNBQXpEO0FBQ0EsQ0FQRDs7QUFTQSxJQUFJLElBQUosQ0FBUywwQ0FBVCxFQUFxRCxLQUFLO0FBQ3pELEdBQUUsSUFBRixDQUFPLENBQVA7O0FBRUEsT0FBTSxXQUFXLElBQUksU0FBSixDQUFjLDZCQUFkLENBQWpCOztBQUVBLE9BQU0sZ0JBQWdCLGtCQUFNLE1BQU4sRUFBYyxjQUFPLElBQVAsQ0FBWSxDQUFaLEVBQWUsUUFBZixDQUFkLENBQXRCOztBQUVBLEdBQUUsS0FBRixDQUFRLGNBQWMsSUFBZCxDQUFtQixJQUFuQixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUFSLEVBQXdDLFFBQXhDLEVBQWtELDZCQUFsRDtBQUNBLENBUkQiLCJmaWxlIjoiZ3VhcmQuZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0ICogYXMgdGFwIGZyb20gXCJ0YXBcIlxuaW1wb3J0IHtndWFyZCwgZ3VhcmRzfSBmcm9tIFwiLi4vc3JjL2d1YXJkLmVzNVwiXG5cbmZ1bmN0aW9uIGRldmlkZShhLCBiKSB7XG5cdHJldHVybiBhL2Jcbn1cblxudGFwLnRlc3QoXCJndWFyZCBmb3IgemVyb1wiLCB0ID0+IHtcblx0dC5wbGFuKDIpXG5cblx0Y29uc3QgZ3VhcmRlZERldmlkZSA9IGd1YXJkKGRldmlkZSwgZ3VhcmRzLnplcm8oMSkpXG5cblx0dC5ub3RUaHJvdyhndWFyZGVkRGV2aWRlLmJpbmQobnVsbCwgNSwgMSksIFwic2hvdWxkIG5vdCB0aHJvdyB3aXRoIGFuIGlucHV0IG9mIDUsMVwiKVxuXHR0LnRocm93KGd1YXJkZWREZXZpZGUuYmluZChudWxsLCA1LCAwKSwgbmV3IFR5cGVFcnJvcigpLCBcInNob3VsZCB0aHJvdyB3aXRoIGFuIGlucHV0IG9mIDUsMFwiKVxufSlcblxudGFwLnRlc3QoXCJndWFyZCBmb3IgemVybyB3aXRoIGN1c3RvbSBlcnJvciBtZXNzYWdlXCIsIHQgPT4ge1xuXHR0LnBsYW4oMSlcblxuXHRjb25zdCBleHBlY3RlZCA9IG5ldyBUeXBlRXJyb3IoXCJEb24ndCBjYWxsIGRldmlkZSB3aXRoIHplcm9cIilcblxuXHRjb25zdCBndWFyZGVkRGV2aWRlID0gZ3VhcmQoZGV2aWRlLCBndWFyZHMuemVybygxLCBleHBlY3RlZCkpXG5cblx0dC50aHJvdyhndWFyZGVkRGV2aWRlLmJpbmQobnVsbCwgNSwgMCksIGV4cGVjdGVkLCBcInNob3VsZCB0aHJvdyBhIGN1c3RvbSBlcnJvclwiKVxufSlcbiJdfQ==