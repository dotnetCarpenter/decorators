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
