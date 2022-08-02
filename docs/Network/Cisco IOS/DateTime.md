# Date / Time

Timezone

```
Switch(config)# clock timezone <timezone name> <timezone offset>
```

## NTP

> [Reference](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/bsm/command/bsm-xe-3se-3850-cr-book/bsm-xe-3se-3850-cr-book_chapter_00.html#wp1522568655)

Stratum = Distance from the reference clock

```
Switch(config)# ntp server <NTP server IP address>
```

Set as NTP server

```
Switch(config)# ntp master [<stratum>]
```
