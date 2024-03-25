# Promise

```js
var promise = new Promise(
  (resolve, reject) => {
    // ...
  }
);

```

## Executor

- `executor` will be executed when `Promise` create ([Ref](https://tc39.es/ecma262/#sec-promise-executor))
- `resolve` and `reject` are callback function
- `executor()` no need to return value

> Ref: [MDN `Promise()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)

```js
var executor = (resolve, reject) => {
    // if success, call resolve()
    resolve("value");
    // after call resolve():
    // Promise { <state>: "fulfilled", <value>: "value" }

    // if fail, call reject()
    reject("error");
    // after call reject():
    // Promise { <state>: "rejected", <reason>: "error" }
};

var promise = new Promise(executor);
// Promise { <state>: "pending" }
```

Example

```js
var promise = new Promise((resolve, reject) => {
    // fetch the data
    let data = localStorage.getItem("data");

    if (data === null) {
        // failed
        reject("no data");
    }
    
    // success
    resolve(data);
});

promise
    .then((value) => {
        console.log('data: ' + value);
    })
    .catch((value) => {
        console.log('error: ' + value);
    })
```

## Handler function

- `onFulfilled(value)`
- `onRejected(value)`

> Ref: [`Promise().then()` return value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#return_value)

```js
function onFulfilled(value) {
    // ...
}

function onRejected(value) {
    // ...
}

promise
    .then(onFulfilled, onRejected);

// same as

promise
    .then(onFulfilled)
    .catch(onRejected);
```

```js
Promise.resolve("value");

// same as

new Promise((resolve, reject) => {
    resolve("value");
});
```

```js
Promise.reject("value");

// same as

new Promise((resolve, reject) => {
    reject("value");
});
```

### About handler function return value

If handler function doesn't return value

- `value` is `undefined`

```js
var promise = Promise.resolve().then(() => {
  // no return;
});

promise.then((value) => {
  console.log(promise);
  console.log("value:", value);
});
```

```js title="Output"
Promise { <state>: "fulfilled", <value>: undefined }
value: undefined
```

If handler function return value that is not `Promise`

- `value` is the return value

```js
var promise = Promise.resolve().then(() => {
  return "value";
});

promise.then((value) => {
  console.log(promise);
  console.log("value:", value);
});
```

```js title="Output"
Promise { <state>: "fulfilled", <value>: "value" }
value: value
```

If handler function return a `Promise.resolve()`

- `value` is `promise.<value>`

```js
var promise = Promise.resolve().then(() => {
  return Promise.resolve("value");
});

promise.then((value) => {
  console.log(promise);
  console.log("value:", value);
});
```

```js title="Output"
Promise { <state>: "fulfilled", <value>: "value" }
value: value
```

If handler function return a `Promise.reject()`

- `value` is `promise.<reason>`

```js
var promise = Promise.resolve().then(() => {
  return Promise.reject("value");
});

promise.catch((value) => {
  console.log(promise);
  console.log("value:", value);
});
```

```js title="Output"
Promise { <state>: "rejected", <reason>: "value" }
value: value
```

If handler function return pending `Promise`

- it will wait the `Promise` to resolve
- the `value` is the pending `Promise` resolve value

```js
var promise = Promise.resolve().then(() => {
  return new Promise((resolve, reject) => {
    resolve("value");
  });
});

promise.then((value) => {
  console.log(promise);
  console.log("value:", value);
});
```

```js title="Output"
Promise { <state>: "fulfilled", <value>: "value" }
value: value
```

If handler function `throw "value"`

- the promise will be rejected
- `value` is the throw `value`

```js
var promise = Promise.resolve().then(() => {
  throw "error";
});

promise.catch((value) => {
  console.log(promise);
  console.log("value:", value);
});
```

```js title="Output"
Promise { <state>: "rejected", <reason>: "error" }
value: error
```
