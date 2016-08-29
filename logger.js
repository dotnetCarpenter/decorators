"use strict"

// Create a function makeLogging(f) which takes an arbitrary function f,
// and makes a wrapper over it which logs calls. The wrapper should have a static
// outputLog() method to output the log.

function makeLogging(f, logHandler = console.log) {
	/* your code */
	const log = []
	const logger = function(...args) {
		log.push(args)
		return f(...args)
	}
	logger.outputLog = ()=> log.forEach( l => logHandler(`${f.name} is called with ${l}`) )
	return logger
}

export default makeLogging

// No modifications of work are allowed. Your code should reside only in makeLogging.