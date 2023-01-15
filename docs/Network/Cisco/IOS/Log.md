# Log

## Monitor log in Telnet / SSH

```
Switch# terminal [no] monitor
```

## Monitor log in Console

```
Switch(config)# [no] logging console
```

## Display timestamp in log / debug

```
Switch(config)# service timestamps { log | debug } datetime localtime
```

## Log to SysLog server

> [Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960/software/release/12-2_55_se/configuration/guide/scg_2960/swlog.html)

```
Switch(config)# logging <ip>
```

## Limit messages logged to the syslog server

```
Switch(config)# logging trap <level>
```

## Send log

```
Switch# send log <message>
```
