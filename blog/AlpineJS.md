---
date: 2024-09-27
tags: [JavaScript, Alpine.js]
---

# Alpine.js

最近用 JS 重寫了很久以前做的 Flash [百家樂 95 數練習](https://steelywing.github.io/baccarat/95/)，因為比較簡單，就想使用比較輕量級的 FrameWork，想起 Alpine.js，就想實作用它試試。

> [Alpine.js](https://alpinejs.dev/)

<!--truncate-->

- 小項目用 `Alpine.js` 挺不錯，但複雜的項目用 `Vue.js` 會比較好

用 `bun` 安裝

```sh
bun add alpinejs
```

`Alpine.js` 開始時會找有 `x-data` 的 DOM，`x-data` 的 DOM 就像一個 Scope，裡面的 Child DOM 都可以存取 `x-data`

```html
<div x-data="{ count: 0 }">
```

`x-data` 是一個 `Object` 存放所有用到的 Value、Function，因為一般比較長，可以放在 JavaScript 中比較易讀

```html
<div x-data="counter">
    <!-- 顯示 count 的值 -->
    count is <span x-text="count"></span>
</div>
```

```js
import Alpine from 'alpinejs';

let counter = Alpine.reactive({
    count: 0,
    increment() {
        this.count++;
    },
});

Alpine.data('counter', () => counter);
Alpine.start();
```

- `Alpine.reactive()` 是將 `Object` 轉成 `Proxy Object`
- 如果不轉成 `Proxy` 也可以直接傳給 `Alpine.data()`，但對於 `counter` 的改變 `Alpine` 就不會觸發，`Alpine` 內部也會將 `counter` 轉成 `Proxy`
- `Proxy` 是用來監聽 `Object` 的變化，有關 `Proxy` 的詳細可以參考 [Vue.js - Reactivity in Depth](https://vuejs.org/guide/extras/reactivity-in-depth.html)

使用 `Alpine.reactive()` 後，直接改變 `counter.count` 就會觸發 `Alpine` 的變化

```js
counter.count++;
```

如果 `data` 不需要在 JavaScript 中操作，`x-data` 可以是空值，比如只是想重覆顯示一些 DOM，但必須有 `x-data`

```html
<template x-data x-for="i in 10">
    <li>
        <span x-text="i"></span> x 2 = 
        <span x-text="i * 2"></span>
    </li>
</template>
```
