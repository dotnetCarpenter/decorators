"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guard = guard;
exports.guards = void 0;

function guard(f, guard) {
  return (...args) => guard(...args) && f(...args);
}

const guards = {
  zero: (argumentIndex, error = new TypeError()) => (...args) => {
    // if(argumentIndex === "all")
    if (args[argumentIndex] === 0) throw error;
    return true;
  }
};
exports.guards = guards;
