---
date: 2024-08-01
tags: [JavaScript, Debug]
---

# Debug in JavaScrip

<!--truncate-->

## `debugger`

In browser, `debugger` can trigger breakpoint

```js
debugger;
```

## Debug native function

```js
function debug(fn) {
    return function () {
        debugger;
        return fn.apply(this, arguments);
    };
}
```

To debug `"string".at()`

```js
String.prototype.at = debug(String.prototype.at);
```

To debug `console.log()`

```js
console.log = debug(console.log);
```

## Inject function

```js
function inject(to, fn) {
    return function () {
        fn.apply(this, arguments);
        return to.apply(this, arguments);
    };
}
```

To log the call stack and arguments when `"string".replace()` is called

```js
String.prototype.replace = inject(
    String.prototype.replace,
    function () {
        console.trace();
        console.log(arguments);
    }
);

"abc".replace("a", "s");
```

## Call stack trace

Get the call stack

```js
new Error().stack
```

Print the call stack

```js
console.trace();

console.trace("message");
```

## Debug in node.js

```cli
node --inspect server.js
```
