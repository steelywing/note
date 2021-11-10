# Date / Time

## Date

Display date

```bash
date [-u|--utc]
```

Set date / time

```bash
timedatectl set-time [<YYYY>-<MM>-<DD>] [<HH>:<MM>:<SS>]
```

```bash
date [-u|--utc] <MMDDhhmm[YYYY][.ss]>
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

Set RTC as the local time

```bash
timedatectl set-local-rtc { true | t | yes | y | 1 }
```

Set RTC as the UTC (Coordinated Universal Time)

```bash
timedatectl set-local-rtc { false | f | no | n | 0 }
```

## Convert timestamp to date time

```bash
# -d <string>  顯示 <string> 所描述的時間
date -d @<timestamp>
```

## Sync Time

Force sync time

```bash
service ntpd stop
ntpd -gq
service ntpd start
```
