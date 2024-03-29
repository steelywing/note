---
slug: .
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

## Static Web Server

### `http-server`

- [Version 14 has error ERR_HTTP_HEADERS_SENT](https://github.com/http-party/http-server/issues/634)

```bash
npm i -g http-server@13

http-server .
```

### Vercel `serve`

See [serve](https://github.com/vercel/serve)
