"use strict"

import * as tap from "tap"
import makeLogging from "../src/logger.es6"

function work(a,b) { /* arbitrary function */ }

tap.test("logging", t => {
	t.plan(1)
	const actual = []
	const expected = [ 'work is called with 1,2', 'work is called with 5,6' ]

	work = makeLogging(work, msg => actual.push(msg))
	// now work should log it's calls somewhere
	work(1,2)
	work(5,6)
	work.outputLog() // <-- should call our log handler

	t.like(actual, expected, `should be an array like: "${expected}"`)
})