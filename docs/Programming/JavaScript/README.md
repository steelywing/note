---
slug: .
sidebar_position: 0
---

# JavaScript

## Remove URL query

[Reference](https://developer.mozilla.org/en-US/docs/Web/API/Window/location#Example_5_Send_a_string_of_data_to_the_server_by_modifying_the_search_property)

```js
location.search = '';
```

Using relative URL 
([Reference RFC1808](https://tools.ietf.org/html/rfc1808))

```html
<a href="?">
```

```js
location = '?';
```

## URL for browser

https://github.com/medialize/URI.js


## Absolute URL for browser

[Reference](https://davidwalsh.name/get-absolute-url)

```js
var getAbsUrl = (function() {
  var a;

  return function(url) {
    if (!a) {
      a = document.createElement('a');
    }
    a.href = url;
    return a.href;
  };
})();
```

## Metric prefix

```js
Number.prototype.prefix = function (precision, base) {

  var units = ' K M G T P E Z Y'.split(' ');

  if (typeof precision === 'undefined') {
    precision = 2;
  }

  if (typeof base === 'undefined') {
    base = 1000;
  }

  if (this == 0 || !isFinite(this)) {
    return this.toFixed(precision) + units[0];
  }

  var power = Math.floor(Math.log(Math.abs(this)) / Math.log(base));
  // Make sure not larger than max prefix
  power = Math.min(power, units.length - 1);

  return (this / Math.pow(base, power)).toFixed(precision) + units[power];
};
```

## Performance / Benchmark
```js
function benchmark(run) {
  var start = performance.now();
  run();
  return performance.now() - start;
}
```

## Promise

Executor

> [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)

```js
var executor = (resolve, reject) => {
    // ...
};
var promise = new Promise(executor);
```

- `executor` will be executed when `Promise` create
  - > [Reference](https://tc39.es/ecma262/#sec-promise-executor)
- `resolve` and `reject` are callback function
- If call `resolve(value)`, `promise` will be fulfilled
- If call `reject(value)`, `promise` will be rejected
- `executor` doesn't need to return value

Handler function
- `resolve(value)`
- `reject(value)`

> [Return value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#return_value)

- If `value` is not a `Promise`, the promise return `value`.
- If value is a `Promise`, it will be settled, and return the promise `value`
- If `reject()` is called, or value is reject, the promise will be rejected.
- If call `resolve(Promise.reject(value))`, the promise will be rejected.
- If call `reject(Promise.resolve(value))`, the promise will be rejected. 

```js
function onFulfilled(value) {
    // ...
}

function onRejected(value) {
    // ...
}

var promise = new Promise(
  (resolve, reject) => {
    // ...
  }
);
promise.then(onFulfilled, onRejected);
```
