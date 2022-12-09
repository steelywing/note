# cron

:::note Reference

[Linux crontab command](https://www.computerhope.com/unix/ucrontab.htm)

:::

`cron` / `crontab`

## User `crontab` file

```
/var/spool/cron/crontabs/<user>
```

## `crontab` file

```bash
/etc/crontab
```

Debian only

```bash
/etc/cron.d/
```

## Note

- Use the standard system crontab `/etc/crontab`

## `crontab` format

```crontab
# minute hour day month week command
0 10-12 * * * echo "10:00 11:00 12:00"
30 10,20 * * * echo "10:30 20:30"
*/10 * * * * echo "Every 10 minutes"
```

| | Range |
|-|-|
| minute | 0 - 59 |
| hour | 0 - 23 |
| day | 1 - 31 |
| month | 1 - 12 |
| week | 0 - 6, 0 = Sunday |

| Symbol | Description |
|-|-|
| `*` | Wildcard, specifies every possible time interval |
| `,` | List multiple values separated by a comma |
| `-` | Specify a range between two numbers, separated by a hyphen |
| `/` | Specify a periodicity/frequency using a slash |
