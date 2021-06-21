## Case sensitive / insensitive search

`\c` `\C` can be in any position

```vi
/[\c][\C]<search>[\c][\C]
```

| Expression | Description |
|-|-|
| `\c` | Case insensitive |
| `\C` | Case sensitive |

## Register (Clipboard)

```vi
"<register ID><command>
```

| Register ID | Description |
|-|-|
| `0` | Most recent yank (copy) |
| `1` | Most recent delete or change |
| `2` - `9` | The 2nd - 9th recent delete or change |
| `a` - `z` | Only use when user specify |
| `A` - `Z` | Append to `a` - `z` register |
