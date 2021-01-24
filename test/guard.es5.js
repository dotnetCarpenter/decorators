"use strict";

var _tap = _interopRequireDefault(require("tap"));

var _guard = require("../src/guard.es5");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function divide(a, b) {
  return a / b;
}

_tap.default.test("guard for zero", t => {
  t.plan(2);
  const guardedDivide = (0, _guard.guard)(divide, _guard.guards.zero(1));
  t.notThrow(guardedDivide.bind(null, 5, 1), "should not throw with an input of 5,1");
  t.throw(guardedDivide.bind(null, 5, 0), new TypeError(), "should throw with an input of 5,0");
});

_tap.default.test("guard for zero with custom error message", t => {
  t.plan(1);
  const expected = new TypeError("Don't call divide with zero");
  const guardedDivide = (0, _guard.guard)(divide, _guard.guards.zero(1, expected));
  t.throw(guardedDivide.bind(null, 5, 0), expected, "should throw a custom error");
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1YXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOzs7O0FBRUEsU0FBUyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCO0FBQ3JCLFNBQU8sQ0FBQyxHQUFDLENBQVQ7QUFDQTs7QUFFRCxhQUFJLElBQUosQ0FBUyxnQkFBVCxFQUEyQixDQUFDLElBQUk7QUFDL0IsRUFBQSxDQUFDLENBQUMsSUFBRixDQUFPLENBQVA7QUFFQSxRQUFNLGFBQWEsR0FBRyxrQkFBTSxNQUFOLEVBQWMsY0FBTyxJQUFQLENBQVksQ0FBWixDQUFkLENBQXRCO0FBRUEsRUFBQSxDQUFDLENBQUMsUUFBRixDQUFXLGFBQWEsQ0FBQyxJQUFkLENBQW1CLElBQW5CLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBQVgsRUFBMkMsdUNBQTNDO0FBQ0EsRUFBQSxDQUFDLENBQUMsS0FBRixDQUFRLGFBQWEsQ0FBQyxJQUFkLENBQW1CLElBQW5CLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBQVIsRUFBd0MsSUFBSSxTQUFKLEVBQXhDLEVBQXlELG1DQUF6RDtBQUNBLENBUEQ7O0FBU0EsYUFBSSxJQUFKLENBQVMsMENBQVQsRUFBcUQsQ0FBQyxJQUFJO0FBQ3pELEVBQUEsQ0FBQyxDQUFDLElBQUYsQ0FBTyxDQUFQO0FBRUEsUUFBTSxRQUFRLEdBQUcsSUFBSSxTQUFKLENBQWMsNkJBQWQsQ0FBakI7QUFFQSxRQUFNLGFBQWEsR0FBRyxrQkFBTSxNQUFOLEVBQWMsY0FBTyxJQUFQLENBQVksQ0FBWixFQUFlLFFBQWYsQ0FBZCxDQUF0QjtBQUVBLEVBQUEsQ0FBQyxDQUFDLEtBQUYsQ0FBUSxhQUFhLENBQUMsSUFBZCxDQUFtQixJQUFuQixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUFSLEVBQXdDLFFBQXhDLEVBQWtELDZCQUFsRDtBQUNBLENBUkQiLCJmaWxlIjoiZ3VhcmQuZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHRhcCBmcm9tIFwidGFwXCJcbmltcG9ydCB7Z3VhcmQsIGd1YXJkc30gZnJvbSBcIi4uL3NyYy9ndWFyZC5lczVcIlxuXG5mdW5jdGlvbiBkaXZpZGUoYSwgYikge1xuXHRyZXR1cm4gYS9iXG59XG5cbnRhcC50ZXN0KFwiZ3VhcmQgZm9yIHplcm9cIiwgdCA9PiB7XG5cdHQucGxhbigyKVxuXG5cdGNvbnN0IGd1YXJkZWREaXZpZGUgPSBndWFyZChkaXZpZGUsIGd1YXJkcy56ZXJvKDEpKVxuXG5cdHQubm90VGhyb3coZ3VhcmRlZERpdmlkZS5iaW5kKG51bGwsIDUsIDEpLCBcInNob3VsZCBub3QgdGhyb3cgd2l0aCBhbiBpbnB1dCBvZiA1LDFcIilcblx0dC50aHJvdyhndWFyZGVkRGl2aWRlLmJpbmQobnVsbCwgNSwgMCksIG5ldyBUeXBlRXJyb3IoKSwgXCJzaG91bGQgdGhyb3cgd2l0aCBhbiBpbnB1dCBvZiA1LDBcIilcbn0pXG5cbnRhcC50ZXN0KFwiZ3VhcmQgZm9yIHplcm8gd2l0aCBjdXN0b20gZXJyb3IgbWVzc2FnZVwiLCB0ID0+IHtcblx0dC5wbGFuKDEpXG5cblx0Y29uc3QgZXhwZWN0ZWQgPSBuZXcgVHlwZUVycm9yKFwiRG9uJ3QgY2FsbCBkaXZpZGUgd2l0aCB6ZXJvXCIpXG5cblx0Y29uc3QgZ3VhcmRlZERpdmlkZSA9IGd1YXJkKGRpdmlkZSwgZ3VhcmRzLnplcm8oMSwgZXhwZWN0ZWQpKVxuXG5cdHQudGhyb3coZ3VhcmRlZERpdmlkZS5iaW5kKG51bGwsIDUsIDApLCBleHBlY3RlZCwgXCJzaG91bGQgdGhyb3cgYSBjdXN0b20gZXJyb3JcIilcbn0pXG4iXX0=