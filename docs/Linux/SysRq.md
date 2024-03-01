# `SysRq`

[Reference](https://github.com/torvalds/linux/blob/master/Documentation/admin-guide/sysrq.rst)

## How to use `SysRq`

Hold <kbd>Alt</kbd>, press <kbd>SysRq</kbd>, press `<command key>`, press `<command key>`, ...

```bash
echo <command key> > /proc/sysrq-trigger
```

## Command key

| Command | Function |
| - | - |
| `b` | Reboot |
| `e` | Send a SIGTERM to all processes, except for init. |
| `h` | Help |
| `i` | Send a SIGKILL to all processes, except for init. |
| `o` | Power off |
| `r` | Turns off keyboard raw mode and sets it to XLATE. |
| `s` | Will attempt to sync all mounted filesystems. |
| `u` | Will attempt to remount all mounted filesystems read-only. |

## Disable `SysRq`

```bash
echo 0 > /proc/sys/kernel/sysrq
```

## Enable all function of `SysRq`

```bash
echo 1 > /proc/sys/kernel/sysrq
```

## Reboot

<kbd>Alt</kbd> + <kbd>SysRq</kbd> + <kbd>r</kbd> + <kbd>e</kbd> + <kbd>k</kbd> + <kbd>s</kbd> + <kbd>u</kbd> + <kbd>b</kbd>
