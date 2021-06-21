## Date

Display date

```bash
date [-u|--utc]
```

Set date

```bash
timedatectl set-time [<YYYY>-<MM>-<DD>] [<HH>:<MM>:<SS>]
```

```bash
date [-u|--utc] [MMDDhhmm[YYYY][.ss]]
```

```bash
date -s "YYYY-MM-DD hh:mm:ss"
```

## Timezone

Display timezone

```bash
date "+%Z %z"
```

```bash
cat /etc/timezone
```

Set timezone

```bash
tzselect
```

```bash
timedatectl set-timezone <timezone>
```

## RTC

Real-Time Clock

RTC as the local time

```bash
timedatectl set-local-rtc { true | t | yes | y | 1 }
```

RTC (Real-Time Clock) as the UTC (Coordinated Universal Time)

```bash
timedatectl set-local-rtc { false | f | no | n | 0 }
```

## Convert timestamp to date time

```bash
date -d @<timestamp>
```
