# Jobs

> [Reference](http://www.linuxnix.com/11-fc-bg-jobs-commands-know/)

| Command | Description |
| - | - |
| <kbd>Ctrl</kbd>+<kbd>Z</kbd> | Suspend current process |
| <kbd>Ctrl</kbd>+<kbd>C</kbd> | Terminate current process |
| `jobs` | List job |
| `<command> &` | Run command in background |
| `%[<job spec>] &` <br/> `bg [%<job spec>]` | Resume job in background (default is current job) |
| `%[<job spec>]` <br/> `fg [%<job spec>]` | Resume job in foreground (default is current job) |
| `kill [%<job spec>]` | Kill job |
| `disown [%<job spec>]` | Don't terminate job when terminal exit (default is all jobs) |
| `nohup <command>` | Don't terminate command when terminal exit (no hangup) |
