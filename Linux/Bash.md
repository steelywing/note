| Command | Description |
| --- | --- |
| `Tab` | Complete command |
| `Ctrl`+`D` | Exit |
| `Ctrl`+`L` | Clear screen |
| `Ctrl`+`R` | Search history |
| `!!` | Previous command |
| `!<string>` | Most recent command starting with `<string>` |


# Parameter

| Parameter | Description |
| --- | --- |
| `$#` | Count of parameter |
| `$0` | The path of shell script |
| `basename $0` | The file name of shell script |
| `$1` `$2` `$3` ... | Positional parameter |
| `$*` `$@` | `$1 $2 $3...` |
| `"$*"` | `"$1$IFS$2$IFS$3..."` |
| `"$@"` | `"$1" "$2" "$3"...` |


# Redirect output

| File descriptor | Description |
| - | - |
| `0` | `stdin` |
| `1` | `stdout` |
| `2` | `stderr` |

Redirect output to file

|  |  |
| - | - |
| Default | `stdout` |
| `1` | `stdout` |
| `2` | `stderr` |
| `&` | `stdout` and `stderr` |

```
<command> [1|2|&]> <file>
```

Redirect `stderr` to `stdout`

```
<command> 2>&1
```

# Pipeline

Pipe `stdout` ▶ `stdin`

```
<command> | <command>
```

Pipe `stdout` and `stderr` ▶ `stdin`

```
<command> |& <command>
```

# For

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

# Command substitution

```sh
$(<command>)
`<command>`
```

## cat file

```sh
$(< <file>)
$(cat <file>)
```

# Variable

## Set variable
```sh
<name>=<value>
```

## Get variable
```sh
$<name>
${<name>}
```

## Remove current session bash history

Clear current history buffer
```sh
history -c
```

Don't save the history when session close
```sh
unset HISTFILE
```

Kill bash
```sh
kill -9 $$
# $$ == Current shell PID
```

## Delete all bash history

Empty history file
```sh
echo > $HISTFILE
```

Set history size to 0
```
HISTSIZE=0
```
