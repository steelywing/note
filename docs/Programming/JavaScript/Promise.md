# Promise

```js
var executor = (resolve, reject) => {
    // ...
    let value = "value";

    resolve(value);
    // promise.<state> = "fulfilled";
    // promise.<value> = value;

    reject(value);
    // promise.<state> = "rejected";
    // promise.<value> = value;
};

var promise = new Promise(executor);
// promise.<state> = "pending";
```

```js title="pseudo code"
while (promise.<state> == "pending") {  }

if (promise.<state> == "fulfilled") {
    promise.<onFulfilled>(promise.<value>);
}

if (promise.<state> == "rejected") {
    promise.<onRejected>(promise.<value>);
}
```

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

## Executor

- `executor` will be executed when `Promise` create ([Ref](https://tc39.es/ecma262/#sec-promise-executor))
- `resolve` and `reject` are callback function
- `executor()` no need to return value

> Ref: [MDN `Promise()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)

## Handler function

- `onFulfilled(value)`
- `onRejected(value)`

> Ref: [`Promise().then()` return value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#return_value)

```js
var promise = new Promise(
  (resolve, reject) => {
    // ...
  }
);

```

If handler function ...

- doesn't return value

```js
var promise = Promise.resolve().then(() => {
  // no return;
});

promise.then((value) => {
  console.log(promise);
  console.log("value =", value);
});
```

```js title="Output"
Promise { <state>: "fulfilled", <value>: undefined }
value = undefined
```

- return value that is not `Promise`

```js
var promise = Promise.resolve().then(() => {
  return "value";
});

promise.then((value) => {
  console.log(promise);
  console.log("value =", value);
});
```

```js title="Output"
Promise { <state>: "fulfilled", <value>: "value" }
value = value
```

- `return Promise.resolve()`

```js
var promise = Promise.resolve().then(() => {
  return Promise.resolve("value");
});

promise.then((value) => {
  console.log(promise);
  console.log("value =", value);
});
```

```js title="Output"
Promise { <state>: "fulfilled", <value>: "value" }
value = value
```

- `return Promise.reject()`

```js
var promise = Promise.resolve().then(() => {
  return Promise.reject("value");
});

promise.catch((value) => {
  console.log(promise);
  console.log("value =", value);
});
```

```js title="Output"
Promise { <state>: "rejected", <reason>: "value" }
value = value
```

- return pending `Promise()`

```js
var promise = Promise.resolve().then(() => {
  return new Promise((resolve, reject) => {
    resolve("value");
  });
});

promise.then((value) => {
  console.log(promise);
  console.log("value =", value);
});
```

```js title="Output"
Promise { <state>: "fulfilled", <value>: "value" }
value = value
```

- `throws "error";`

```js
var promise = Promise.resolve().then(() => {
  throw "error";
});

promise.catch((value) => {
  console.log(promise);
  console.log("value =", value);
});
```

```js title="Output"
Promise { <state>: "rejected", <reason>: "error" }
value = error
```
