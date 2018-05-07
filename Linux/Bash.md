| Command | Description |
| --- | --- |
| `Tab` | Complete command |
| `Ctrl`+`D` | Exit |
| `Ctrl`+`L` | Clear screen |
| `Ctrl`+`R` | Search history |
| `!!` | Previous command |
| `!<string>` | Most recent command starting with `<string>` |


## Parameter

| Parameter | Description |
| --- | --- |
| `$#` | Count of parameter |
| `$0` | The path of shell script |
| `basename $0` | The file name of shell script |
| `$1` `$2` `$3` ... | Positional parameter |
| `$*` `$@` | `$1 $2 $3...` |
| `"$*"` | `"$1$IFS$2$IFS$3..."` |
| `"$@"` | `"$1" "$2" "$3"...` |


## For each file

```sh
for <file variable name> in *; do
  <...>
done
```


## For each `find` result

[Reference](https://stackoverflow.com/a/15066129) / [Reference](https://stackoverflow.com/a/9612232/1877620)
```sh
find [<expression>] -print0 | while IFS= read -r -d $'\0' <file variable name>; do
  <...>
done
```
