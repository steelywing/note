# WSH

Windows Script Host

## Include external file

```js
function load(file) {
    var fso, file, content;
    fso = new ActiveXObject("Scripting.FileSystemObject");
    file = fso.OpenTextFile(file);
    content = file.ReadAll();
    file.Close();
    return content;
}

eval(load("file.js"));
```
