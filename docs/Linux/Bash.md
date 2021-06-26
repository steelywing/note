# `bash`

| Command | Description |
| - | - |
| `Tab` | Complete command |
| `Ctrl`+`D` | Exit |
| `Ctrl`+`L` | Clear screen |
| `Ctrl`+`R` | Search history |
| `!!` | Previous command |
| `!<string>` | Most recent command starting with `<string>` |


## Parameter

| Parameter | Description |
| - | - |
| `$#` | Count of parameter |
| `$0` | The path of shell script |
| `basename $0` | The file name of shell script |
| `$1` `$2` `$3` ... | Positional parameter |
| `$*` `$@` | `$1 $2 $3...` |
| `"$*"` | `"$1$IFS$2$IFS$3..."` |
| `"$@"` | `"$1" "$2" "$3"...` |


## Redirect output

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

## Pipeline

Pipe `stdout` ➡ `stdin`

```
<command> | <command>
```

Pipe `stdout` and `stderr` ➡ `stdin`

```
<command> |& <command>
```

## Loop / Iterate

### For each file

```bash
for <file variable name> in *; do
  <...>
done
```

### For each `find` result

[Reference](https://stackoverflow.com/a/15066129) / [Reference](https://stackoverflow.com/a/9612232/1877620)
```bash
find [<expression>] -print0 | while IFS= read -r -d $'\0' <file variable name>; do
  <...>
done
```

### For each array value

```bash
array=(a b c)
for i in "${array[@]}"; do
  // $i == <current value>
done
```

## Command substitution

```bash
$(<command>)
`<command>`
```

## Process substitution

Redirect input to `<input command>`

```bash
<command> <( <input command> )
```

Redirect output to `<output command>`

```bash
<command> >( <output command> )
```

### cat file

```bash
$(< <file>)
$(cat <file>)
```

## Environment variable

### Set variable

```bash
<name>=<value>
```

### Get variable

```bash
$<name>
${<name>}
```

### List variable

```bash
env
```

### Export variable

Export `env` variable to child process

```bash
export <name>[=<value>]
```

## History

### Search history

<kbd>Ctrl + R</kbd>

### Remove current session bash history

Clear current history buffer
```bash
history -c
```

Don't save the history when session close
```bash
unset HISTFILE
```

Kill bash
```bash
## $$ == Current shell PID
kill -9 $$
```

### Delete all bash history

Empty history file
```bash
> $HISTFILE
```

Set history size to 0
```
HISTSIZE=0
```
