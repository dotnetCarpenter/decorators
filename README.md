[![Build Status](https://travis-ci.org/dotnetCarpenter/decorators.svg?branch=master)](https://travis-ci.org/dotnetCarpenter/decorators)
[![codecov](https://codecov.io/gh/dotnetCarpenter/decorators/branch/master/graph/badge.svg)](https://codecov.io/gh/dotnetCarpenter/decorators)


http://javascript.info/tutorial/decorators


> Note: `.es5` extension does not mean that the file is in EcmaScript 5.1
> but that the file export using CommonJS. Sorry, but changing the file
> extension would be a breaking change for little benefit.
## API
This is just small snippets, but perhaps they
can inspire you to write your own decorators.

### Logging
Where `work` is your function, that you want to log calls to.

```js
import logger from "src/logger.es5"

work = logger(work)
work(1,2)
work(5,6)
work.outputLog() // will use console.log to output calls made to work
```

Or if you want to do something with the logs, you can provide your own
log handler function.

```js
import logger from "src/logger.es5"

const logs = []
work = logger(work, log => logs.push(log)) // add a function to be called for each log
work(1,2)
work(5,6)
work.outputLog() // will fill the logs array with logs
```

### Caching
Where `slow` is your function, that you want to speed up.

```js
import memoize from "src/cache.es5"

const speedy = memoize(slow)
let a = speedy(22) // call slow with 22 and return the result
let b = speedy(22) // returns the previous result
```

`memoize` can also have a context. Which is useful when you use
prototypal inheritance or objects.

```js
import memoize from "src/cache.es5"

class MyClass {
	constructor() {
		this.slow = slow
	}
	execute(values) {
		return this.slow(values)
	}
}

const myClass = new MyClass
const speedy = memoize(myClass.execute, myClass)
let a = speedy(22) // call slow with 22 and return the result
let b = speedy(22) // returns the previous result
```

```js
const myObject = {
	slow,
	execute(values) {
		return this.slow(values)
	}
}

const speedy = memoize(myObject.execute, myObject)
let a = speedy(22) // call slow with 22 and return the result
let b = speedy(22) // returns the previous result
```

### Guarding
A *guard* decorator is useful when you want to guard against
particular arguments to a function. This is known as defensive
coding and if implemented inside your function, can quickly
make a mess of otherwise clean functions.

But with a decorator your function will still be clean and
your can *turn on/off* guards as needed. I suggest your use
guards while developing and construct your guards to throw
errors. This way, you can write your application and quickly
spot malfunctioning caller functions. When the application
is well tested, your can remove the guards and gain better
performance.

Where `work` will return nonsense if the second argument is zero.

```js
import {guard, guards} from "src/guard.es5"

work = guard(work, guards.zero(1)) // default error for guards.zero is TypeError
work(32,0) // will throw a TypeError
```

Or with a custom error:

```js
import {guard, guards} from "src/guard.es5"

work = guard(work, guards.zero(1, new RangeError("Second argument to work MUST be between 1-100")))
work(32,0) // will throw a RangeError with the message: "Second argument to work MUST be between 1-100"
```

**Custom guard**
Where `work` takes an object as first argument and we want to throw if a property is *falsy*.

```js
import {guard} from "src/guard.es5"

work = guard(work, (...args) => {
	if( !args[0].requiredProperty ) throw new TypeError("options.requiredProperty MUST be set")
	return true
})
work({ requiredProperty: undefined }) // will throw
```

## How to test
`npm test`

Remember to install the npm modules before running
the test suite. Use `npm i` to install.

## How to build
`make`

You can build faster by specifying building in parallel.
`make -j 2` for building two targets at the time.
You should set the `-j` parameter to as many cpu cores,
as you have.
