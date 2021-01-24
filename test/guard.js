"use strict"

import tap from "tap"
import {guard, guards} from "../src/guard.es5"

function devide(a, b) {
	return a/b
}

tap.test("guard for zero", t => {
	t.plan(2)

	const guardedDevide = guard(devide, guards.zero(1))

	t.notThrow(guardedDevide.bind(null, 5, 1), "should not throw with an input of 5,1")
	t.throw(guardedDevide.bind(null, 5, 0), new TypeError(), "should throw with an input of 5,0")
})

tap.test("guard for zero with custom error message", t => {
	t.plan(1)

	const expected = new TypeError("Don't call devide with zero")

	const guardedDevide = guard(devide, guards.zero(1, expected))

	t.throw(guardedDevide.bind(null, 5, 0), expected, "should throw a custom error")
})
