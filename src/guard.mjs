"use strict"

function guard(f, guard) {
	return (...args) => guard(...args) && f(...args)
}

const guards = {
	zero: (argumentIndex, error = new TypeError) =>
		(...args) => {
			// if(argumentIndex === "all")
			if(args[argumentIndex] === 0) throw error
			return true
		}
}

export {
	guard,
	guards
}