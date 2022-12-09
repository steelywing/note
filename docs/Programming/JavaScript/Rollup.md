# Rollup.js

- Cannot mix using CommonJS `require()` and ES module `import` in the same one JS file
- `import` can import ES module
- `import` can import CommonJS using `@rollup/plugin-commonjs`

## IIFE

Immediately-Invoked Function Expression

- No Code Splitting

```js title="rollup.config.js"
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run watch` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

const plugins = [
    resolve(), // find date-fns in node_modules
    commonjs(), // converts date-fns to ES modules
    production && terser() // minify, but only in production
];

export default [
    {
        input: 'src/main.js',
        output: {
            file: 'public/bundle.js',
            format: 'iife',
            sourcemap: true
        },
        plugins: plugins,
    },
    /* 
    {
        input: ...,
        output: ...,
    }
    */
];
```

:::note Reference

[rollup-starter-app](https://github.com/rollup/rollup-starter-app/blob/master/rollup.config.js)

:::

## Run

| | |
|-|-|
| `-c` | Use config file<br/>Default: `rollup.config.js` |
| `-w` | Watch mode |

```bash
rollup -c [rollup.config.js] [-w]
```

:::note Reference

[Configuration Files](https://rollupjs.org/guide/en/#configuration-files)

:::

## Using SystemJS

- Compatible
- Code Splitting

```bash
npm install --save-dev systemjs
```

```js title="rollup.config.js"
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const plugins = [
    resolve(),
    commonjs(),
    production && terser(), // minify
];

export default [
    {
        input: ['page.js', /*...*/],
        output: {
            dir: 'dist/',
            format: 'system',
            sourcemap: true,
        },
        plugins: plugins,
    },
];
```

```html title=".html"
<script src="node_modules/systemjs/dist/s.min.js"></script>

<script>
System.import('dist/page.js');
</script>
```

## Import plain JS

```js
import 'plain.js';
```
