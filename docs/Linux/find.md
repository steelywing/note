# `find`

Run command in `find` result, `{}` is result path

```bash
find [<path>] [[!] <expression>] -exec <command> {} +
```

`<command> {} +` will expand to `<command> <path> <path> ...`

```bash
find [<path>] [[!] <expression>] -exec <command> {} \;
```

`<command> {} \;` will expand to `<command> <path>; <command> <path>; ...`

| Expression | Description |
| - | - |
| `-name "<glob pattern>"` | Match file name |
| `-iname "<glob pattern>"` | Match file name with case insensitive |
| `-type { f \| d }` | File / Directory |
| `-mtime [+\|-]<days>` | Last modified time |
| `-atime [+\|-]<days>` | Last accessed time |
| `-size [+\|-]<size>[k\|M\|G]` | File size |

| Time Expression | Description |
| - | - |
| | `diff = int(day(current_time - file_time))` |
| `+<days>` | `diff > <days>` |
| `-<days>` | `diff < <days>` |
| `<days>` | `diff == <days>` |
