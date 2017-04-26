"use strict";

var _tap = require("tap");

var tap = _interopRequireWildcard(_tap);

var _cache = require("../src/cache.es5");

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function work(...args) {
	return args.reduce((a, b) => a + Math.random() * b, Math.random());
}
function workWithObject(obj) {
	return work.apply(null, Object.values(obj));
}

tap.test("simple caching", t => {
	t.plan(2);

	const memWork = (0, _cache2.default)(work);
	let a = memWork(1);
	let b = memWork(1);

	t.equal(a, b, "a === b should be true (cached)");

	memWork.flush(); // clears the cache
	b = memWork(1);
	t.notEqual(a, b, "a === b should be false");
});

tap.test("dyadic caching", t => {
	t.plan(3);

	const memWork = (0, _cache2.default)(work);
	let a = memWork(2, 4);
	let b = memWork(2, 4);

	t.equal(a, b, "a === b should be true (cached)");

	b = memWork(2, 4.2);
	t.notEqual(a, b, "a === b should be false");

	memWork.flush(); // clears the cache
	b = memWork(2, 4);
	t.notEqual(a, b, "a === b should be false");
});

tap.test("triadic caching", t => {
	t.plan(3);

	const memWork = (0, _cache2.default)(work);
	let a = memWork(5, 7, 2);
	let b = memWork(5, 7, 2);

	t.equal(a, b, "a === b should be true (cached)");

	b = memWork(1, 4.2, 41);
	t.notEqual(a, b, "a === b should be false");

	memWork.flush(); // clears the cache
	b = memWork(1, 4.2, 41);
	t.notEqual(a, b, "a === b should be false");
});

tap.test("object caching", t => {
	t.plan(5);

	const memWork = (0, _cache2.default)(workWithObject);
	let a = memWork({ a: 1 });
	let b = memWork({ a: 1 });

	t.equal(a, b, "a === b should be true (cached)");

	b = memWork({ b: 1 });
	t.notEqual(a, b, "a === b should be false");

	memWork.flush(); // clears the cache
	b = memWork({ a: 1 });
	t.notEqual(a, b, "a === b should be false");

	memWork.flush(); // clears the cache
	a = memWork({ a: 3, b: 2, c: 5, d: -1 });
	b = memWork({ a: 3, b: 2, c: 5, d: -1 });
	t.equal(a, b, "a === b should be true (cached)");

	memWork.flush(); // clears the cache
	a = memWork({ a: 3, b: 2, c: 5, d: -1 });
	b = memWork({ a: 3, b: 2, c: 5, d: 100 });
	t.notEqual(a, b, "a === b should be false)");
});

tap.test("array caching", t => {
	t.plan(3);

	let memWork = (0, _cache2.default)(work);
	let a = memWork.apply(null, [1, 2, 3]);
	let b = memWork.apply(null, [1, 2, 3]);

	t.equal(a, b, "a === b should be true (cached)");

	memWork.flush(); // clears the cache
	b = memWork.apply(null, [1, 2, 3]);
	t.notEqual(a, b, "a === b should be false");

	/** context can NOT be used to transform input **/
	memWork = (0, _cache2.default)(work, work);
	a = memWork([1, 2, 3]);
	b = memWork([1, 2, 3]);

	t.notEqual(a, b, "a === b should be false - NaN - context can NOT be used to transform input )");
});

tap.test("context caching (prototype/object)", t => {
	t.plan(6);

	function MyClass() {
		this.work = work;
	}
	MyClass.prototype.execute = function (values) {
		return this.work(values);
	};

	class MyClassSuger {
		constructor() {
			this.work = work;
		}
		execute(values) {
			return this.work(values);
		}
	}

	const myObject = {
		work,
		execute(values) {
			return this.work(values);
		}
	};

	/** prototypal context **/
	const myClass = new MyClass();
	let memWork = (0, _cache2.default)(myClass.execute, myClass);
	let a = memWork(1);
	let b = memWork(1);

	t.equal(a, b, "a === b should be true (cached)");

	memWork.flush(); // clears the cache
	b = memWork(1);
	t.notEqual(a, b, "a === b should be false");

	/** class prototypal context **/
	const myClassSugar = new MyClassSuger();
	memWork = (0, _cache2.default)(myClassSugar.execute, myClassSugar);
	a = memWork(1);
	b = memWork(1);

	t.equal(a, b, "a === b should be true (cached)");

	memWork.flush(); // clears the cache
	b = memWork(1);
	t.notEqual(a, b, "a === b should be false");

	/** object context **/
	memWork = (0, _cache2.default)(myObject.execute, myObject);
	a = memWork(1);
	b = memWork(1);

	t.equal(a, b, "a === b should be true (cached)");
	memWork.flush(); // clears the cache

	b = memWork(1);
	t.notEqual(a, b, "a === b should be false");
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBaUIseUJBQWpCO0FBQ0EsQ0E5REQiLCJmaWxlIjoiY2FjaGUuZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0ICogYXMgdGFwIGZyb20gXCJ0YXBcIlxuaW1wb3J0IG1ha2VDYWNoaW5nIGZyb20gXCIuLi9zcmMvY2FjaGUuZXM1XCJcblxuZnVuY3Rpb24gd29yayguLi5hcmdzKSB7IHJldHVybiBhcmdzLnJlZHVjZSgoYSxiKSA9PiBhICsgTWF0aC5yYW5kb20oKSpiLCBNYXRoLnJhbmRvbSgpKSB9XG5mdW5jdGlvbiB3b3JrV2l0aE9iamVjdChvYmopIHsgcmV0dXJuIHdvcmsuYXBwbHkobnVsbCwgT2JqZWN0LnZhbHVlcyhvYmopKSB9XG5cblxudGFwLnRlc3QoXCJzaW1wbGUgY2FjaGluZ1wiLCAodCkgPT4ge1xuXHR0LnBsYW4oMilcblxuXHRjb25zdCBtZW1Xb3JrID0gbWFrZUNhY2hpbmcod29yaylcblx0bGV0IGEgPSBtZW1Xb3JrKDEpXG5cdGxldCBiID0gbWVtV29yaygxKVxuXG5cdHQuZXF1YWwoYSwgYiwgXCJhID09PSBiIHNob3VsZCBiZSB0cnVlIChjYWNoZWQpXCIpXG5cblx0bWVtV29yay5mbHVzaCgpXHQvLyBjbGVhcnMgdGhlIGNhY2hlXG5cdGIgPSBtZW1Xb3JrKDEpXG5cdHQubm90RXF1YWwoYSwgYiwgXCJhID09PSBiIHNob3VsZCBiZSBmYWxzZVwiKVxufSlcblxudGFwLnRlc3QoXCJkeWFkaWMgY2FjaGluZ1wiLCAodCkgPT4ge1xuXHR0LnBsYW4oMylcblxuXHRjb25zdCBtZW1Xb3JrID0gbWFrZUNhY2hpbmcod29yaylcblx0bGV0IGEgPSBtZW1Xb3JrKDIsIDQpXG5cdGxldCBiID0gbWVtV29yaygyLCA0KVxuXG5cdHQuZXF1YWwoYSwgYiwgXCJhID09PSBiIHNob3VsZCBiZSB0cnVlIChjYWNoZWQpXCIpXG5cblx0YiA9IG1lbVdvcmsoMiwgNC4yKVxuXHR0Lm5vdEVxdWFsKGEsIGIsIFwiYSA9PT0gYiBzaG91bGQgYmUgZmFsc2VcIilcblxuXHRtZW1Xb3JrLmZsdXNoKClcdC8vIGNsZWFycyB0aGUgY2FjaGVcblx0YiA9IG1lbVdvcmsoMiwgNClcblx0dC5ub3RFcXVhbChhLCBiLCBcImEgPT09IGIgc2hvdWxkIGJlIGZhbHNlXCIpXG59KVxuXG50YXAudGVzdChcInRyaWFkaWMgY2FjaGluZ1wiLCAodCkgPT4ge1xuXHR0LnBsYW4oMylcblxuXHRjb25zdCBtZW1Xb3JrID0gbWFrZUNhY2hpbmcod29yaylcblx0bGV0IGEgPSBtZW1Xb3JrKDUsIDcsIDIpXG5cdGxldCBiID0gbWVtV29yayg1LCA3LCAyKVxuXG5cdHQuZXF1YWwoYSwgYiwgXCJhID09PSBiIHNob3VsZCBiZSB0cnVlIChjYWNoZWQpXCIpXG5cblx0YiA9IG1lbVdvcmsoMSwgNC4yLCA0MSlcblx0dC5ub3RFcXVhbChhLCBiLCBcImEgPT09IGIgc2hvdWxkIGJlIGZhbHNlXCIpXG5cblx0bWVtV29yay5mbHVzaCgpXHQvLyBjbGVhcnMgdGhlIGNhY2hlXG5cdGIgPSBtZW1Xb3JrKDEsIDQuMiwgNDEpXG5cdHQubm90RXF1YWwoYSwgYiwgXCJhID09PSBiIHNob3VsZCBiZSBmYWxzZVwiKVxufSlcblxudGFwLnRlc3QoXCJvYmplY3QgY2FjaGluZ1wiLCAodCkgPT4ge1xuXHR0LnBsYW4oNSlcblxuXHRjb25zdCBtZW1Xb3JrID0gbWFrZUNhY2hpbmcod29ya1dpdGhPYmplY3QpXG5cdGxldCBhID0gbWVtV29yayh7YToxfSlcblx0bGV0IGIgPSBtZW1Xb3JrKHthOjF9KVxuXG5cdHQuZXF1YWwoYSwgYiwgXCJhID09PSBiIHNob3VsZCBiZSB0cnVlIChjYWNoZWQpXCIpXG5cblx0YiA9IG1lbVdvcmsoe2I6MX0pXG5cdHQubm90RXF1YWwoYSwgYiwgXCJhID09PSBiIHNob3VsZCBiZSBmYWxzZVwiKVxuXG5cdG1lbVdvcmsuZmx1c2goKVx0Ly8gY2xlYXJzIHRoZSBjYWNoZVxuXHRiID0gbWVtV29yayh7YToxfSlcblx0dC5ub3RFcXVhbChhLCBiLCBcImEgPT09IGIgc2hvdWxkIGJlIGZhbHNlXCIpXG5cblx0bWVtV29yay5mbHVzaCgpXHQvLyBjbGVhcnMgdGhlIGNhY2hlXG5cdGEgPSBtZW1Xb3JrKHthOjMsYjoyLGM6NSxkOi0xfSlcblx0YiA9IG1lbVdvcmsoe2E6MyxiOjIsYzo1LGQ6LTF9KVxuXHR0LmVxdWFsKGEsIGIsIFwiYSA9PT0gYiBzaG91bGQgYmUgdHJ1ZSAoY2FjaGVkKVwiKVxuXG5cdG1lbVdvcmsuZmx1c2goKVx0Ly8gY2xlYXJzIHRoZSBjYWNoZVxuXHRhID0gbWVtV29yayh7YTozLGI6MixjOjUsZDotMX0pXG5cdGIgPSBtZW1Xb3JrKHthOjMsYjoyLGM6NSxkOjEwMH0pXG5cdHQubm90RXF1YWwoYSwgYiwgXCJhID09PSBiIHNob3VsZCBiZSBmYWxzZSlcIilcbn0pXG5cbnRhcC50ZXN0KFwiYXJyYXkgY2FjaGluZ1wiLCAodCkgPT4ge1xuXHR0LnBsYW4oMylcblxuXHRsZXQgbWVtV29yayA9IG1ha2VDYWNoaW5nKHdvcmspXG5cdGxldCBhID0gbWVtV29yay5hcHBseShudWxsLCBbMSwyLDNdKVxuXHRsZXQgYiA9IG1lbVdvcmsuYXBwbHkobnVsbCwgWzEsMiwzXSlcblxuXHR0LmVxdWFsKGEsIGIsIFwiYSA9PT0gYiBzaG91bGQgYmUgdHJ1ZSAoY2FjaGVkKVwiKVxuXG5cdG1lbVdvcmsuZmx1c2goKVx0Ly8gY2xlYXJzIHRoZSBjYWNoZVxuXHRiID0gbWVtV29yay5hcHBseShudWxsLCBbMSwyLDNdKVxuXHR0Lm5vdEVxdWFsKGEsIGIsIFwiYSA9PT0gYiBzaG91bGQgYmUgZmFsc2VcIilcblxuXG5cdC8qKiBjb250ZXh0IGNhbiBOT1QgYmUgdXNlZCB0byB0cmFuc2Zvcm0gaW5wdXQgKiovXG5cdG1lbVdvcmsgPSBtYWtlQ2FjaGluZyh3b3JrLCB3b3JrKVxuXHRhID0gbWVtV29yayhbMSwyLDNdKVxuXHRiID0gbWVtV29yayhbMSwyLDNdKVxuXG5cdHQubm90RXF1YWwoYSwgYiwgXCJhID09PSBiIHNob3VsZCBiZSBmYWxzZSAtIE5hTiAtIGNvbnRleHQgY2FuIE5PVCBiZSB1c2VkIHRvIHRyYW5zZm9ybSBpbnB1dCApXCIpXG59KVxuXG50YXAudGVzdChcImNvbnRleHQgY2FjaGluZyAocHJvdG90eXBlL29iamVjdClcIiwgKHQpID0+IHtcblx0dC5wbGFuKDYpXG5cblx0ZnVuY3Rpb24gTXlDbGFzcygpIHtcblx0XHR0aGlzLndvcmsgPSB3b3JrXG5cdH1cblx0TXlDbGFzcy5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uKHZhbHVlcykge1xuXHRcdHJldHVybiB0aGlzLndvcmsodmFsdWVzKVxuXHR9XG5cblx0Y2xhc3MgTXlDbGFzc1N1Z2VyIHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHRoaXMud29yayA9IHdvcmtcblx0XHR9XG5cdFx0ZXhlY3V0ZSh2YWx1ZXMpIHtcblx0XHRcdHJldHVybiB0aGlzLndvcmsodmFsdWVzKVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IG15T2JqZWN0ID0ge1xuXHRcdHdvcmssXG5cdFx0ZXhlY3V0ZSh2YWx1ZXMpIHtcblx0XHRcdHJldHVybiB0aGlzLndvcmsodmFsdWVzKVxuXHRcdH1cblx0fVxuXG5cdC8qKiBwcm90b3R5cGFsIGNvbnRleHQgKiovXG5cdGNvbnN0IG15Q2xhc3MgPSBuZXcgTXlDbGFzc1xuXHRsZXQgbWVtV29yayA9IG1ha2VDYWNoaW5nKG15Q2xhc3MuZXhlY3V0ZSwgbXlDbGFzcylcblx0bGV0IGEgPSBtZW1Xb3JrKDEpXG5cdGxldCBiID0gbWVtV29yaygxKVxuXG5cdHQuZXF1YWwoYSwgYiwgXCJhID09PSBiIHNob3VsZCBiZSB0cnVlIChjYWNoZWQpXCIpXG5cblx0bWVtV29yay5mbHVzaCgpXHQvLyBjbGVhcnMgdGhlIGNhY2hlXG5cdGIgPSBtZW1Xb3JrKDEpXG5cdHQubm90RXF1YWwoYSwgYiwgXCJhID09PSBiIHNob3VsZCBiZSBmYWxzZVwiKVxuXG5cblx0LyoqIGNsYXNzIHByb3RvdHlwYWwgY29udGV4dCAqKi9cblx0Y29uc3QgbXlDbGFzc1N1Z2FyID0gbmV3IE15Q2xhc3NTdWdlclxuXHRtZW1Xb3JrID0gbWFrZUNhY2hpbmcobXlDbGFzc1N1Z2FyLmV4ZWN1dGUsIG15Q2xhc3NTdWdhcilcblx0YSA9IG1lbVdvcmsoMSlcblx0YiA9IG1lbVdvcmsoMSlcblxuXHR0LmVxdWFsKGEsIGIsIFwiYSA9PT0gYiBzaG91bGQgYmUgdHJ1ZSAoY2FjaGVkKVwiKVxuXG5cdG1lbVdvcmsuZmx1c2goKVx0Ly8gY2xlYXJzIHRoZSBjYWNoZVxuXHRiID0gbWVtV29yaygxKVxuXHR0Lm5vdEVxdWFsKGEsIGIsIFwiYSA9PT0gYiBzaG91bGQgYmUgZmFsc2VcIilcblxuXG5cdC8qKiBvYmplY3QgY29udGV4dCAqKi9cblx0bWVtV29yayA9IG1ha2VDYWNoaW5nKG15T2JqZWN0LmV4ZWN1dGUsIG15T2JqZWN0KVxuXHRhID0gbWVtV29yaygxKVxuXHRiID0gbWVtV29yaygxKVxuXG5cdHQuZXF1YWwoYSwgYiwgXCJhID09PSBiIHNob3VsZCBiZSB0cnVlIChjYWNoZWQpXCIpXG5cdG1lbVdvcmsuZmx1c2goKVx0Ly8gY2xlYXJzIHRoZSBjYWNoZVxuXG5cdGIgPSBtZW1Xb3JrKDEpXG5cdHQubm90RXF1YWwoYSwgYiwgXCJhID09PSBiIHNob3VsZCBiZSBmYWxzZVwiKVxufSlcbiJdfQ==