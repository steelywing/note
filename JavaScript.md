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
Number.prototype.prefix = function (precision = 2) {

    var units = ' K M G T P E Z Y'.split(' ');

    if (this < 0) {
        return '-' + Math.abs(this).prefix(precision);
    }

    if (this < 1024 || !Number.isFinite(this)) {
        return this + units[0];
    }

    var power = Math.min(
        Math.floor(Math.log(this) / Math.log(1024)),
        units.length - 1
    );

    return (this / Math.pow(1024, power)).toFixed(precision) + units[power];
}
```
