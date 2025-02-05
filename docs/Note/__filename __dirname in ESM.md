---
date: 2025-02-04
tags: [JavaScript, Node.js, ESM]
---

# Use `__filename` / `__dirname` in Node.js ES module

> Ref: [Modules: ECMAScript modules | Node.js v23.7.0 Documentation](https://nodejs.org/api/esm.html#no-__filename-or-__dirname)

For **node.js** >= v20.11.0

```js
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;
```

<!--truncate-->

For **node.js** < v20.11.0

```js
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```
