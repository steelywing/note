# `at`

## Check if `atd` is running

```bash
systemctl status atd.service
```

## Add job

Run command at specified time

```bash
at <time spec>
<command>
[...]
<Ctrl + D>
```

```bash
at <time spec> <<END
<command>
[...]
END
```

```bash
echo "<command>" | at <time spec>
```

| | Description |
|-|-|
| `<time spec>` | `{ NOW \| <time> \| <date> \| <time> <date> } [{+\|-} <period> <unit>]` |
| `<time>` | `{ <HH>:<MM> [AM\|PM] } [UTC]` |
| `<date>` | `<month name> <day> [<year>] \| MM/DD/[YY]YY \| [YY]YY-MM-DD \| [NEXT] <day of week> \| TODAY \| TOMORROW` |
| `<month name>` | `JAN \| FEB \| MAR \| APR \| MAY \| JUN \| JUL \| AUG \| SEP \| OCT \| NOV \| DEC` |
| `<day of week>` | `SUN \| MON \| TUE \| WED \| THU \| FRI \| SAT` |
| `<unit>` | `MINUTE \| HOUR \| DAY \| WEEK \| MONTH \| YEAR` |

## Remove job

```bash
atrm <job ID>
```

```bash
at {-r|-d} <job ID>
```

## List job

```bash
atq
```

```bash
at -l
```

## View job

```bash
at -c <job ID>
```
