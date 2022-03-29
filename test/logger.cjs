"use strict";

var _tap = _interopRequireDefault(require("tap"));

var _logger = _interopRequireDefault(require("../src/logger.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function work(a, b) {
  /* arbitrary function */
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

_tap.default.test("logging with default logger", t => {
  t.plan(1);
  work = (0, _logger.default)(work);
  work(1, 2);
  work(5, 6);
  t.doesNotThrow(work.outputLog, "should not throw when using console.log");
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQTs7OztBQUVBLFNBQVMsSUFBVCxDQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBbUI7QUFBRTtBQUEwQjs7QUFFL0MsYUFBSSxJQUFKLENBQVMsU0FBVCxFQUFvQixDQUFDLElBQUk7QUFDeEIsRUFBQSxDQUFDLENBQUMsSUFBRixDQUFPLENBQVA7QUFDQSxRQUFNLE1BQU0sR0FBRyxFQUFmO0FBQ0EsUUFBTSxRQUFRLEdBQUcsQ0FBRSx5QkFBRixFQUE2Qix5QkFBN0IsQ0FBakI7QUFFQSxFQUFBLElBQUksR0FBRyxxQkFBWSxJQUFaLEVBQWtCLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBUCxDQUFZLEdBQVosQ0FBekIsQ0FBUCxDQUx3QixDQU14Qjs7QUFDQSxFQUFBLElBQUksQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFKO0FBQ0EsRUFBQSxJQUFJLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBSjtBQUNBLEVBQUEsSUFBSSxDQUFDLFNBQUwsR0FUd0IsQ0FTUDs7QUFFakIsRUFBQSxDQUFDLENBQUMsS0FBRixDQUFRLE1BQVIsRUFBZ0IsUUFBaEIsRUFBMkIsNkJBQTRCLFFBQVMsR0FBaEU7QUFDQSxDQVpEOztBQWNBLGFBQUksSUFBSixDQUFTLDZCQUFULEVBQXdDLENBQUMsSUFBSTtBQUM1QyxFQUFBLENBQUMsQ0FBQyxJQUFGLENBQU8sQ0FBUDtBQUVBLEVBQUEsSUFBSSxHQUFHLHFCQUFZLElBQVosQ0FBUDtBQUNBLEVBQUEsSUFBSSxDQUFDLENBQUQsRUFBRyxDQUFILENBQUo7QUFDQSxFQUFBLElBQUksQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFKO0FBRUEsRUFBQSxDQUFDLENBQUMsWUFBRixDQUFlLElBQUksQ0FBQyxTQUFwQixFQUErQix5Q0FBL0I7QUFDQSxDQVJEIiwiZmlsZSI6ImxvZ2dlci5janMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgdGFwIGZyb20gXCJ0YXBcIlxuaW1wb3J0IG1ha2VMb2dnaW5nIGZyb20gXCIuLi9zcmMvbG9nZ2VyLmNqc1wiXG5cbmZ1bmN0aW9uIHdvcmsoYSxiKSB7IC8qIGFyYml0cmFyeSBmdW5jdGlvbiAqLyB9XG5cbnRhcC50ZXN0KFwibG9nZ2luZ1wiLCB0ID0+IHtcblx0dC5wbGFuKDEpXG5cdGNvbnN0IGFjdHVhbCA9IFtdXG5cdGNvbnN0IGV4cGVjdGVkID0gWyAnd29yayBpcyBjYWxsZWQgd2l0aCAxLDInLCAnd29yayBpcyBjYWxsZWQgd2l0aCA1LDYnIF1cblxuXHR3b3JrID0gbWFrZUxvZ2dpbmcod29yaywgbXNnID0+IGFjdHVhbC5wdXNoKG1zZykpXG5cdC8vIG5vdyB3b3JrIHNob3VsZCBsb2cgaXQncyBjYWxscyBzb21ld2hlcmVcblx0d29yaygxLDIpXG5cdHdvcmsoNSw2KVxuXHR3b3JrLm91dHB1dExvZygpIC8vIDwtLSBzaG91bGQgY2FsbCBvdXIgbG9nIGhhbmRsZXJcblxuXHR0Lm1hdGNoKGFjdHVhbCwgZXhwZWN0ZWQsIGBzaG91bGQgYmUgYW4gYXJyYXkgbGlrZTogXCIke2V4cGVjdGVkfVwiYClcbn0pXG5cbnRhcC50ZXN0KFwibG9nZ2luZyB3aXRoIGRlZmF1bHQgbG9nZ2VyXCIsIHQgPT4ge1xuXHR0LnBsYW4oMSlcblxuXHR3b3JrID0gbWFrZUxvZ2dpbmcod29yaylcblx0d29yaygxLDIpXG5cdHdvcmsoNSw2KVxuXG5cdHQuZG9lc05vdFRocm93KHdvcmsub3V0cHV0TG9nLCBcInNob3VsZCBub3QgdGhyb3cgd2hlbiB1c2luZyBjb25zb2xlLmxvZ1wiKVxufSlcbiJdfQ==