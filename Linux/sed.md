# CLI

```sh
sed '<script>' <input file> <input file> ...
```

# Script

```sed
[<address>] <command>
```

`hold space` ≈ `clipboard`

`pattern space` ≈ `current record`

## Address

| Address | Description |
| --- | --- |
| `<number>` | Line number |
| `$` | Last line |
| `<first>,<last>` | Line number range |
| `<first>~<step>` | Line number step |
| `/<RegExp>/` <br> `\<character>RegExp<character>` | RegExp |
| `<address>!` | Not matching `<address>` |

## Command

| Command | Description |
| --- | --- |
| `d` | Delete and go to next cycle |
| `s/<RegExp>/<replacement>/[<flags]>` | Substitute RegExp |
| `=` | Print line number |
| `h` | Replace `hold space` with `pattern space` |
| `H` | Append `hold space` to `pattern space` |
| `g` | Replace `pattern space` with `hold space` |
| `G` | Append `pattern space` to `hold space` |
| `q[<exit code>]` | Quit with `exit code` |
| `{ <command>; <command>; ... }` | Group command |

### RegExp flags

| Flag | Description |
| --- | --- |
| `g` | Global, replace all matches |
| `<number>` | Replace the **number** th match |
| `p` | Print if match |
| `i` | Case insensitive |
| `m` | Multi-line mode |

### RegExp capture group

`\1` `\2` ...
