"use strict";

var tap = _interopRequireWildcard(require("tap"));

var _guard = require("../src/guard.es5");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1YXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOzs7Ozs7QUFFQSxTQUFTLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0I7QUFDckIsU0FBTyxDQUFDLEdBQUMsQ0FBVDtBQUNBOztBQUVELEdBQUcsQ0FBQyxJQUFKLENBQVMsZ0JBQVQsRUFBMkIsQ0FBQyxJQUFJO0FBQy9CLEVBQUEsQ0FBQyxDQUFDLElBQUYsQ0FBTyxDQUFQO0FBRUEsUUFBTSxhQUFhLEdBQUcsa0JBQU0sTUFBTixFQUFjLGNBQU8sSUFBUCxDQUFZLENBQVosQ0FBZCxDQUF0QjtBQUVBLEVBQUEsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxhQUFhLENBQUMsSUFBZCxDQUFtQixJQUFuQixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUFYLEVBQTJDLHVDQUEzQztBQUNBLEVBQUEsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxhQUFhLENBQUMsSUFBZCxDQUFtQixJQUFuQixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUFSLEVBQXdDLElBQUksU0FBSixFQUF4QyxFQUF5RCxtQ0FBekQ7QUFDQSxDQVBEO0FBU0EsR0FBRyxDQUFDLElBQUosQ0FBUywwQ0FBVCxFQUFxRCxDQUFDLElBQUk7QUFDekQsRUFBQSxDQUFDLENBQUMsSUFBRixDQUFPLENBQVA7QUFFQSxRQUFNLFFBQVEsR0FBRyxJQUFJLFNBQUosQ0FBYyw2QkFBZCxDQUFqQjtBQUVBLFFBQU0sYUFBYSxHQUFHLGtCQUFNLE1BQU4sRUFBYyxjQUFPLElBQVAsQ0FBWSxDQUFaLEVBQWUsUUFBZixDQUFkLENBQXRCO0FBRUEsRUFBQSxDQUFDLENBQUMsS0FBRixDQUFRLGFBQWEsQ0FBQyxJQUFkLENBQW1CLElBQW5CLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBQVIsRUFBd0MsUUFBeEMsRUFBa0QsNkJBQWxEO0FBQ0EsQ0FSRCIsImZpbGUiOiJndWFyZC5lczUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgKiBhcyB0YXAgZnJvbSBcInRhcFwiXG5pbXBvcnQge2d1YXJkLCBndWFyZHN9IGZyb20gXCIuLi9zcmMvZ3VhcmQuZXM1XCJcblxuZnVuY3Rpb24gZGV2aWRlKGEsIGIpIHtcblx0cmV0dXJuIGEvYlxufVxuXG50YXAudGVzdChcImd1YXJkIGZvciB6ZXJvXCIsIHQgPT4ge1xuXHR0LnBsYW4oMilcblxuXHRjb25zdCBndWFyZGVkRGV2aWRlID0gZ3VhcmQoZGV2aWRlLCBndWFyZHMuemVybygxKSlcblxuXHR0Lm5vdFRocm93KGd1YXJkZWREZXZpZGUuYmluZChudWxsLCA1LCAxKSwgXCJzaG91bGQgbm90IHRocm93IHdpdGggYW4gaW5wdXQgb2YgNSwxXCIpXG5cdHQudGhyb3coZ3VhcmRlZERldmlkZS5iaW5kKG51bGwsIDUsIDApLCBuZXcgVHlwZUVycm9yKCksIFwic2hvdWxkIHRocm93IHdpdGggYW4gaW5wdXQgb2YgNSwwXCIpXG59KVxuXG50YXAudGVzdChcImd1YXJkIGZvciB6ZXJvIHdpdGggY3VzdG9tIGVycm9yIG1lc3NhZ2VcIiwgdCA9PiB7XG5cdHQucGxhbigxKVxuXG5cdGNvbnN0IGV4cGVjdGVkID0gbmV3IFR5cGVFcnJvcihcIkRvbid0IGNhbGwgZGV2aWRlIHdpdGggemVyb1wiKVxuXG5cdGNvbnN0IGd1YXJkZWREZXZpZGUgPSBndWFyZChkZXZpZGUsIGd1YXJkcy56ZXJvKDEsIGV4cGVjdGVkKSlcblxuXHR0LnRocm93KGd1YXJkZWREZXZpZGUuYmluZChudWxsLCA1LCAwKSwgZXhwZWN0ZWQsIFwic2hvdWxkIHRocm93IGEgY3VzdG9tIGVycm9yXCIpXG59KVxuIl19