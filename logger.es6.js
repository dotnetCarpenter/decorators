"use strict";

// Create a function makeLogging(f) which takes an arbitrary function f,
// and makes a wrapper over it which logs calls. The wrapper should have a static
// outputLog() method to output the log.

// Should work like this:

function work(a, b) {/* arbitrary function */}

function makeLogging(f) {
	/* your code */
	const log = [];
	const logger = function (...args) {
		log.push(args);
		return f(...args);
	};
	logger.outputLog = () => log.forEach(l => console.log(f.name + " is called with " + l));
	return logger;
}

work = makeLogging(work);

// now work should log it's calls somewhere (but not in global)

work(1, 2);

work(5, 6);

work.outputLog(); // <-- should alert('1,2'), alert('5,6')

// No modifications of work are allowed. Your code should reside only in makeLogging.
