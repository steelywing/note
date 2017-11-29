For each file

```sh
for <file variable name> in *; do
  <...>
done
```


For each `find` result

[Reference](https://stackoverflow.com/a/15066129)
```sh
find [<expression>] -print0 | while IFS= read -r -d $'\0' <file variable name>; do
  <...>
done
```
