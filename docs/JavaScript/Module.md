## IIFE (Immediately Invoked Function Expression) - Browser

> [Reference](https://developer.mozilla.org/zh-TW/docs/Glossary/IIFE)

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

## AMD (Asynchronous Module Definition) - RequireJS

> uncommon

> [Reference](https://requirejs.org/docs/api.html)

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

## CommonJS - Node.js

> [Reference](http://wiki.commonjs.org/wiki/Modules/1.1.1)

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

## UMD (Universal Module Definition) - Node.js, Browser

> [Reference](https://github.com/umdjs/umd)

Uses AMD as a base, with special-casing added to handle CommonJS compatibility.

## ESM (ECMAScript Module) - Node.js, Browser

> Reference: [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import), [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

File extension: `.mjs`

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
