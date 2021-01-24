"use strict";

var tap = _interopRequireWildcard(require("tap"));

var _logger = _interopRequireDefault(require("../src/logger.es5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function work(a, b) {
  /* arbitrary function */
}

tap.test("logging", t => {
  t.plan(1);
  const actual = [];
  const expected = ['work is called with 1,2', 'work is called with 5,6'];
  work = (0, _logger.default)(work, msg => actual.push(msg)); // now work should log it's calls somewhere

  work(1, 2);
  work(5, 6);
  work.outputLog(); // <-- should call our log handler

  t.like(actual, expected, `should be an array like: "${expected}"`);
});
tap.test("logging with default logger", t => {
  t.plan(1);
  work = (0, _logger.default)(work);
  work(1, 2);
  work(5, 6);
  t.notThrow(work.outputLog, "should not throw when using console.log");
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFTLElBQVQsQ0FBYyxDQUFkLEVBQWdCLENBQWhCLEVBQW1CO0FBQUU7QUFBMEI7O0FBRS9DLEdBQUcsQ0FBQyxJQUFKLENBQVMsU0FBVCxFQUFvQixDQUFDLElBQUk7QUFDeEIsRUFBQSxDQUFDLENBQUMsSUFBRixDQUFPLENBQVA7QUFDQSxRQUFNLE1BQU0sR0FBRyxFQUFmO0FBQ0EsUUFBTSxRQUFRLEdBQUcsQ0FBRSx5QkFBRixFQUE2Qix5QkFBN0IsQ0FBakI7QUFFQSxFQUFBLElBQUksR0FBRyxxQkFBWSxJQUFaLEVBQWtCLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBUCxDQUFZLEdBQVosQ0FBekIsQ0FBUCxDQUx3QixDQU14Qjs7QUFDQSxFQUFBLElBQUksQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFKO0FBQ0EsRUFBQSxJQUFJLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBSjtBQUNBLEVBQUEsSUFBSSxDQUFDLFNBQUwsR0FUd0IsQ0FTUDs7QUFFakIsRUFBQSxDQUFDLENBQUMsSUFBRixDQUFPLE1BQVAsRUFBZSxRQUFmLEVBQTBCLDZCQUE0QixRQUFTLEdBQS9EO0FBQ0EsQ0FaRDtBQWNBLEdBQUcsQ0FBQyxJQUFKLENBQVMsNkJBQVQsRUFBd0MsQ0FBQyxJQUFJO0FBQzVDLEVBQUEsQ0FBQyxDQUFDLElBQUYsQ0FBTyxDQUFQO0FBRUEsRUFBQSxJQUFJLEdBQUcscUJBQVksSUFBWixDQUFQO0FBQ0EsRUFBQSxJQUFJLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBSjtBQUNBLEVBQUEsSUFBSSxDQUFDLENBQUQsRUFBRyxDQUFILENBQUo7QUFFQSxFQUFBLENBQUMsQ0FBQyxRQUFGLENBQVcsSUFBSSxDQUFDLFNBQWhCLEVBQTJCLHlDQUEzQjtBQUNBLENBUkQiLCJmaWxlIjoibG9nZ2VyLmVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCAqIGFzIHRhcCBmcm9tIFwidGFwXCJcbmltcG9ydCBtYWtlTG9nZ2luZyBmcm9tIFwiLi4vc3JjL2xvZ2dlci5lczVcIlxuXG5mdW5jdGlvbiB3b3JrKGEsYikgeyAvKiBhcmJpdHJhcnkgZnVuY3Rpb24gKi8gfVxuXG50YXAudGVzdChcImxvZ2dpbmdcIiwgdCA9PiB7XG5cdHQucGxhbigxKVxuXHRjb25zdCBhY3R1YWwgPSBbXVxuXHRjb25zdCBleHBlY3RlZCA9IFsgJ3dvcmsgaXMgY2FsbGVkIHdpdGggMSwyJywgJ3dvcmsgaXMgY2FsbGVkIHdpdGggNSw2JyBdXG5cblx0d29yayA9IG1ha2VMb2dnaW5nKHdvcmssIG1zZyA9PiBhY3R1YWwucHVzaChtc2cpKVxuXHQvLyBub3cgd29yayBzaG91bGQgbG9nIGl0J3MgY2FsbHMgc29tZXdoZXJlXG5cdHdvcmsoMSwyKVxuXHR3b3JrKDUsNilcblx0d29yay5vdXRwdXRMb2coKSAvLyA8LS0gc2hvdWxkIGNhbGwgb3VyIGxvZyBoYW5kbGVyXG5cblx0dC5saWtlKGFjdHVhbCwgZXhwZWN0ZWQsIGBzaG91bGQgYmUgYW4gYXJyYXkgbGlrZTogXCIke2V4cGVjdGVkfVwiYClcbn0pXG5cbnRhcC50ZXN0KFwibG9nZ2luZyB3aXRoIGRlZmF1bHQgbG9nZ2VyXCIsIHQgPT4ge1xuXHR0LnBsYW4oMSlcblxuXHR3b3JrID0gbWFrZUxvZ2dpbmcod29yaylcblx0d29yaygxLDIpXG5cdHdvcmsoNSw2KVxuXG5cdHQubm90VGhyb3cod29yay5vdXRwdXRMb2csIFwic2hvdWxkIG5vdCB0aHJvdyB3aGVuIHVzaW5nIGNvbnNvbGUubG9nXCIpXG59KVxuIl19