"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
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

exports.guard = guard;
exports.guards = guards;
