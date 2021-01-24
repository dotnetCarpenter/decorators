"use strict"; // Create a function makeLogging(f) which takes an arbitrary function f,
// and makes a wrapper over it which logs calls. The wrapper should have a static
// outputLog() method to output the log.

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function makeLogging(f, logHandler = console.log) {
  /* your code */
  const log = [];

  const logger = function (...args) {
    log.push(args);
    return f(...args);
  };

  logger.outputLog = () => log.forEach(l => logHandler(`${f.name || 'anonymous'} is called with ${l}`));

  return logger;
}

var _default = makeLogging; // No modifications of work are allowed. Your code should reside only in makeLogging.

exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhLENBRUE7QUFDQTtBQUNBOzs7Ozs7O0FBRUEsU0FBUyxXQUFULENBQXFCLENBQXJCLEVBQXdCLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBN0MsRUFBa0Q7QUFDakQ7QUFDQSxRQUFNLEdBQUcsR0FBRyxFQUFaOztBQUNBLFFBQU0sTUFBTSxHQUFHLFVBQVMsR0FBRyxJQUFaLEVBQWtCO0FBQ2hDLElBQUEsR0FBRyxDQUFDLElBQUosQ0FBUyxJQUFUO0FBQ0EsV0FBTyxDQUFDLENBQUMsR0FBRyxJQUFKLENBQVI7QUFDQSxHQUhEOztBQUlBLEVBQUEsTUFBTSxDQUFDLFNBQVAsR0FBbUIsTUFBSyxHQUFHLENBQUMsT0FBSixDQUFhLENBQUMsSUFBSSxVQUFVLENBQUUsR0FBRSxDQUFDLENBQUMsSUFBRixJQUFTLFdBQVksbUJBQWtCLENBQUUsRUFBN0MsQ0FBNUIsQ0FBeEI7O0FBQ0EsU0FBTyxNQUFQO0FBQ0E7O2VBRWMsVyxFQUVmIiwiZmlsZSI6ImxvZ2dlci5lczUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxuXG4vLyBDcmVhdGUgYSBmdW5jdGlvbiBtYWtlTG9nZ2luZyhmKSB3aGljaCB0YWtlcyBhbiBhcmJpdHJhcnkgZnVuY3Rpb24gZixcbi8vIGFuZCBtYWtlcyBhIHdyYXBwZXIgb3ZlciBpdCB3aGljaCBsb2dzIGNhbGxzLiBUaGUgd3JhcHBlciBzaG91bGQgaGF2ZSBhIHN0YXRpY1xuLy8gb3V0cHV0TG9nKCkgbWV0aG9kIHRvIG91dHB1dCB0aGUgbG9nLlxuXG5mdW5jdGlvbiBtYWtlTG9nZ2luZyhmLCBsb2dIYW5kbGVyID0gY29uc29sZS5sb2cpIHtcblx0LyogeW91ciBjb2RlICovXG5cdGNvbnN0IGxvZyA9IFtdXG5cdGNvbnN0IGxvZ2dlciA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcblx0XHRsb2cucHVzaChhcmdzKVxuXHRcdHJldHVybiBmKC4uLmFyZ3MpXG5cdH1cblx0bG9nZ2VyLm91dHB1dExvZyA9ICgpPT4gbG9nLmZvckVhY2goIGwgPT4gbG9nSGFuZGxlcihgJHtmLm5hbWV8fCAnYW5vbnltb3VzJ30gaXMgY2FsbGVkIHdpdGggJHtsfWApIClcblx0cmV0dXJuIGxvZ2dlclxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlTG9nZ2luZ1xuXG4vLyBObyBtb2RpZmljYXRpb25zIG9mIHdvcmsgYXJlIGFsbG93ZWQuIFlvdXIgY29kZSBzaG91bGQgcmVzaWRlIG9ubHkgaW4gbWFrZUxvZ2dpbmcuIl19