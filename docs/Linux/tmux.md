# `tmux`

## New session

```bash
tmux new[-session] [-n <session name>]
```

## Attach session

```bash
tmux a[ttach[-session]] [<option>] [-t <session name>]
```

| Option | Description |
| - | - |
| `-d` | Detach other clients |

## Command

### In CLI

```bash
tmux <command>
```

### In `tmux`

Default prefix key: <kbd>Ctrl</kbd> + <kbd>b</kbd>

Execute command

- <kbd>&lt;prefix key&gt;</kbd>
- `Key` or `:<command>`

| Key | Command | Alias | Description |
|-|-|-|-|
| <kbd>:</kbd>`<command>` | `<command>` |  | Command |
| <kbd>?</kbd> | `list-keys` | `lsk` | List keys binding |
| <kbd>d</kbd> | `detach-client` | `detach` | Detach |
| <kbd>D</kbd> | `choose-client` |  | Detach other clients |
|  | `bind-key [-n] [-t <table>] <key> <command> [<arguments>]` | `bind` | Bind key |
|  | `unbind-key [-n] [-t <table>] <key>` | `unbind` | Unbind key |
| <kbd>[</kbd> | `copy-mode` |  | Copy mode |
| <kbd>]</kbd> | `paste-buffer` |  | Paste buffer |
| <kbd>=</kbd> | `choose-buffer` |  | Choose buffer |

## Session

| Key | Command | Alias | Description |
|-|-|-|-|
|  | `list-sessions` | `ls` | List session |
| <kbd>s</kbd> | `choose-tree` |  | Tree mode for all session |

## Window

| Key | Command | Alias | Description |
|-|-|-|-|
| <kbd>c</kbd> | `new-window [-n<name>]` `<command>` | `neww` | New window |
| <kbd>%</kbd> <kbd>"</kbd> | `split-window [-h] <command>` | `splitw` | Split window
| <kbd>0</kbd> to <kbd>9</kbd> | `select-window [-t <window>]` | `selectw` | Select window |
| <kbd>p</kbd> | `previous-window` | `prev` | Previous window |
| <kbd>n</kbd> | `next-window` | `next` | Next window |
| <kbd>l</kbd> | `last-window` | `last` | Last window |
| <kbd>w</kbd> | `choose-window` |  | Tree mode for all window of attached session |
| <kbd>f</kbd> | `find-window` |  | Find window or pane |
| <kbd>&</kbd> | `kill-window` | `killw` | Kill current window |

## Pane

| Key | Command | Alias | Description |
|-|-|-|-|
| <kbd>Up</kbd> <kbd>Down</kbd> <kbd>Left</kbd> <kbd>Right</kbd> | `select-pane [-U] [-D] [-L] [-R]` | `selectp` | Select pane |
| <kbd>q</kbd> | `display-panes` | `displayp` | Print pane numbers |
| <kbd>x</kbd> | `kill-pane` | `killp` | Kill active pane |
|  | `kill-server` |  | Kill server |
|  | `kill-session` |  | Kill session |
| <kbd>z</kbd> | `resize-pane -Z` |  | Zoom / UnZoom / Maximize |

## Layout

| Key | Command | Alias | Description |
|-|-|-|-|
| <kbd>Space</kbd> | `next-layout` |  | Nex layout |
| <kbd>Alt + 1</kbd> to <kbd>Alt + 5</kbd> | `select-layout <layout>` |  | Select layout |

## Config

```bash title="~/.tmux.conf"
# Comment
<command>
```

## Mouse

> Ref: [Getting-Started](https://github.com/tmux/tmux/wiki/Getting-Started)

Enable mouse

```tmux
:set -g mouse on
```

## Tree mode

| Key | Function |
| - | - |
| `Enter` | Change the attached session, current window or active pane |
| `Up` | Select previous item |
| `Down` | Select next item |
| `Right` | Expand item |
| `Left` | Collapse item |
| `x` | Kill selected item |
| `X` | Kill tagged items |
| `<` | Scroll preview left |
| `>` | Scroll preview right |
| `Ctrl + s` | Search by name |
| `n` | Repeat last search |
| `t` | Toggle if item is tagged |
| `T` | Tag no items |
| `Ctrl + t` | Tag all items |
| `:` | Prompt for a command to run for the selected item or each tagged item |
| `O` | Change sort field |
| `r` | Reverse sort order |
| `v` | Toggle preview |
| `q` | Exit tree mode |

## Copy mode

Default: `emacs` key

Use `vi` key

```bash
{VISUAL|EDITOR}={vi|vim|nvi}
```

| Command | `vi` Key | `emacs` Key |
| - | - | - |
| `begin-selection` | <kbd>Space</kbd> | <kbd>Ctrl + Space</kbd> |
| `cancel` | <kbd>q</kbd> | <kbd>Escape</kbd> |
| `copy-selection-and-cancel` | <kbd>Enter</kbd> | <kbd>Alt + w</kbd> |
| `cursor-up` | <kbd>k</kbd> | <kbd>Up</kbd> |
| `cursor-down` | <kbd>j</kbd> | <kbd>Down</kbd> |
| `cursor-left` | <kbd>h</kbd> | <kbd>Left</kbd> |
| `cursor-right` | <kbd>l</kbd> | <kbd>Right</kbd> |
| `start-of-line` | <kbd>0</kbd> | <kbd>Ctrl + a</kbd> |
| `back-to-indentation` | <kbd>^</kbd> | <kbd>Alt + m</kbd> |
| `end-of-line` | <kbd>$</kbd> | <kbd>Ctrl + e</kbd> |
| `goto-line` | <kbd>:</kbd> | <kbd>g</kbd> |
| `halfpage-down` | <kbd>Ctrl + d</kbd> | <kbd>Alt + Down</kbd> |
| `halfpage-up` | <kbd>Ctrl + u</kbd> | <kbd>Alt + Up</kbd> |
| `page-down` | <kbd>Ctrl + f</kbd> | <kbd>Page Down</kbd> |
| `page-up` | <kbd>Ctrl + b</kbd> | <kbd>Page Up</kbd> |
| `history-bottom` | <kbd>G</kbd> | <kbd>Alt + &gt;</kbd> |
| `history-top` | <kbd>g</kbd> | <kbd>Alt + &lt;</kbd> |
| `search-forward` | <kbd>/</kbd> | <kbd>Ctrl + s</kbd> |
| `search-again` | <kbd>n</kbd> | <kbd>n</kbd> |
| `search-reverse` | <kbd>N</kbd> | <kbd>N</kbd> |
| `select-line` | <kbd>V</kbd> |  |
