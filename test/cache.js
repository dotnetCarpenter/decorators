"use strict"

import * as tap from "tap"
import {makeCaching, work} from "../cache.es6"

tap.test("simple caching", (t) => {
	t.plan(2)

	const memWork = makeCaching(work)
	let a = memWork(1)	
	let b = memWork(1)

	t.ok( a == b, "a == b should be true (cached)" ) // true (cached)
	memWork.flush()    // clears the cache
	b = memWork(1)
	t.not( a == b, "a == b should be false" ) // false
})