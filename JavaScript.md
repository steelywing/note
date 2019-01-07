# Remove URL query

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

# URL for browser

https://github.com/medialize/URI.js


# Absolute URL for browser

https://davidwalsh.name/get-absolute-url

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

# Metric prefix

```js
Number.prototype.prefix = function (precision, base) {

  var units = ' K M G T P E Z Y'.split(' ');

  if (typeof precision === 'undefined') {
    precision = 2;
  }

  if (typeof base === 'undefined') {
    base = 1024;
  }

  if (this < 0) {
    return '-' + Math.abs(this).prefix(precision);
  }

  if (this < base || !Number.isFinite(this)) {
    return this + units[0];
  }

  var power = Math.min(
    Math.floor(Math.log(this) / Math.log(base)),
    units.length - 1
  );

  return (this / Math.pow(base, power)).toFixed(precision) + units[power];
}
```
