---
sidebar_label: Module
---

# Module - JavaScript

## IIFE

Immediately Invoked Function Expression

- Used in Browser

> Ref: [IIFE - MDN](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

```js
(function () {
  // …
})();
```

```js
// circle.js

var circle = (function () {
    const { PI } = Math;
    return {
        pi: PI;
        area: (r) => PI * (r ** 2);
    };
})();
```

```html
<script src="circle.js"></script>
<script>
console.log(circle.pi);
</script>
```

## CommonJS

- Used in Node.js

> Ref: [Modules/1.1.1 - CommonJS Spec Wiki](http://wiki.commonjs.org/wiki/Modules/1.1.1)

File extension: `.cjs`

```js
// circle.js

const { PI } = Math;

exports.pi = PI;
exports.area = (r) => PI * (r ** 2);
```

```js
const circle = require('./circle.js');
console.log(circle.pi);
```

## ESM

ECMAScript Module

- Used in Node.js, Browser
- ECMAScript standard
- To use `import` in browser, `<script type="module">` is needed

> Ref: [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import), [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

File extension: `.js` or `.mjs`

Example 1:

```js
// circle.mjs

const { PI } = Math;

export const pi = PI;
export function area(r) {
    return PI * (r ** 2);
}
```

```js
import * as circle from "./circle";
console.log(circle.pi);
```

```js
import { pi, area } from "./circle";
console.log(pi);
```

Example 2:

```js
// circle.js

export default {
    pi: Math.PI,
    area(r) {
        return PI * (r ** 2);
    },
}
```

```js
import circle from "./circle.js";

console.log(circle.pi); 
console.log(circle.area(2));
```

## AMD

Asynchronous Module Definition

- Uncommon
- Used in RequireJS
- No maintenance, Last commit: 2020-04-06

> Ref: [RequireJS API](https://requirejs.org/docs/api.html)

```js
// circle.js

define('circle',
    [ /* Dependency */ ],
    function( /* Dependency */ ) {
        const { PI } = Math;
        return {
            pi: PI,
            area: (r) => PI * (r ** 2),
        };
    }
);
```

```js
requirejs(['circle'], function(circle) {
    console.log(circle.pi);
});
```

## UMD

Universal Module Definition

- Uncommon
- Used in Node.js, Browser
- No maintenance, Last commit: 2017-10-14

> Ref: [UMD](https://github.com/umdjs/umd)

UMD uses AMD as a base, with special-casing added to handle CommonJS compatibility.
