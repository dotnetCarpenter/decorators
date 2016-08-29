[![Build Status](https://travis-ci.org/dotnetCarpenter/decorators.svg?branch=master)](https://travis-ci.org/dotnetCarpenter/decorators)
[![codecov](https://codecov.io/gh/dotnetCarpenter/decorators/branch/master/graph/badge.svg)](https://codecov.io/gh/dotnetCarpenter/decorators)


http://javascript.info/tutorial/decorators

## API
This is just small snippets but perhaps they
can inspire you to write your own. 

### Logging
Where `work` is your function, that you want to log calls to.

```js
import logger from "../logger.es6"

work = logger(work)
work(1,2)
work(5,6)
work.outputLog() // will use console.log to output calls made to work
```

Or if you want to do something with the logs, you can provide your own
log handler function.

```js
import logger from "../logger.es6"

const logs = []
work = logger(work, log => logs.push(log)) // add a function to be called for each log
work(1,2)
work(5,6)
work.outputLog() // will fill the logs array with logs
```

### Caching
Where `slow` is your function, that you want to speed up. 

```js
import memoize from "../cache.es6"

const speedy = memoize(slow)
let a = speedy(22) // call slow with 22 and return the result
let b = speedy(22) // return the prevous result
```

## How to test
`npm test`

## How to build
`make`