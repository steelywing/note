#### URL for browser
https://github.com/medialize/URI.js

#### Absolute URL for browser
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
