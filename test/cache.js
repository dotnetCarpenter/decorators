"use strict"

import * as tap from "tap"
import makeCaching from "../src/cache.es5"

function work(...args) { return args.reduce((a,b) => a + Math.random()*b, Math.random()) }
function workWithObject(obj) { return work.apply(null, Object.values(obj)) }


tap.test("simple caching", (t) => {
	t.plan(2)

	const memWork = makeCaching(work)
	let a = memWork(1)
	let b = memWork(1)

	t.equal(a, b, "a === b should be true (cached)")

	memWork.flush()	// clears the cache
	b = memWork(1)
	t.notEqual(a, b, "a === b should be false")
})

tap.test("dyadic caching", (t) => {
	t.plan(3)

	const memWork = makeCaching(work)
	let a = memWork(2, 4)
	let b = memWork(2, 4)

	t.equal(a, b, "a === b should be true (cached)")

	b = memWork(2, 4.2)
	t.notEqual(a, b, "a === b should be false")

	memWork.flush()	// clears the cache
	b = memWork(2, 4)
	t.notEqual(a, b, "a === b should be false")
})

tap.test("triadic caching", (t) => {
	t.plan(3)

	const memWork = makeCaching(work)
	let a = memWork(5, 7, 2)
	let b = memWork(5, 7, 2)

	t.equal(a, b, "a === b should be true (cached)")

	b = memWork(1, 4.2, 41)
	t.notEqual(a, b, "a === b should be false")

	memWork.flush()	// clears the cache
	b = memWork(1, 4.2, 41)
	t.notEqual(a, b, "a === b should be false")
})

tap.test("object caching", (t) => {
	t.plan(5)

	const memWork = makeCaching(workWithObject)
	let a = memWork({a:1})
	let b = memWork({a:1})

	t.equal(a, b, "a === b should be true (cached)")

	b = memWork({b:1})
	t.notEqual(a, b, "a === b should be false")

	memWork.flush()	// clears the cache
	b = memWork({a:1})
	t.notEqual(a, b, "a === b should be false")

	memWork.flush()	// clears the cache
	a = memWork({a:3,b:2,c:5,d:-1})
	b = memWork({a:3,b:2,c:5,d:-1})
	t.equal(a, b, "a === b should be true (cached)")

	memWork.flush()	// clears the cache
	a = memWork({a:3,b:2,c:5,d:-1})
	b = memWork({a:3,b:2,c:5,d:100})
	t.notEqual(a, b, "a === b should be false)")
})

tap.test("array caching", (t) => {
	t.plan(3)

	let memWork = makeCaching(work)
	let a = memWork.apply(null, [1,2,3])
	let b = memWork.apply(null, [1,2,3])

	t.equal(a, b, "a === b should be true (cached)")

	memWork.flush()	// clears the cache
	b = memWork.apply(null, [1,2,3])
	t.notEqual(a, b, "a === b should be false")


	/** context can NOT be used to transform input **/
	memWork = makeCaching(work, work)
	a = memWork([1,2,3])
	b = memWork([1,2,3])

	t.notEqual(a, b, "a === b should be false - NaN - context can NOT be used to transform input )")
})

tap.test("context caching (prototype/object)", (t) => {
	t.plan(6)

	function MyClass() {
		this.work = work
	}
	MyClass.prototype.execute = function(values) {
		return this.work(values)
	}

	class MyClassSuger {
		constructor() {
			this.work = work
		}
		execute(values) {
			return this.work(values)
		}
	}

	const myObject = {
		work,
		execute(values) {
			return this.work(values)
		}
	}

	/** prototypal context **/
	const myClass = new MyClass
	let memWork = makeCaching(myClass.execute, myClass)
	let a = memWork(1)
	let b = memWork(1)

	t.equal(a, b, "a === b should be true (cached)")

	memWork.flush()	// clears the cache
	b = memWork(1)
	t.notEqual(a, b, "a === b should be false")


	/** class prototypal context **/
	const myClassSugar = new MyClassSuger
	memWork = makeCaching(myClassSugar.execute, myClassSugar)
	a = memWork(1)
	b = memWork(1)

	t.equal(a, b, "a === b should be true (cached)")

	memWork.flush()	// clears the cache
	b = memWork(1)
	t.notEqual(a, b, "a === b should be false")


	/** object context **/
	memWork = makeCaching(myObject.execute, myObject)
	a = memWork(1)
	b = memWork(1)

	t.equal(a, b, "a === b should be true (cached)")
	memWork.flush()	// clears the cache

	b = memWork(1)
	t.notEqual(a, b, "a === b should be false")
})
