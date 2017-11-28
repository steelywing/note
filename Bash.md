For each find result
[Reference](https://stackoverflow.com/a/15066129)
```sh
find [<expression>] -print0 | while IFS= read -r -d $'\0' <file name variable>; do
  <...>
done
```
