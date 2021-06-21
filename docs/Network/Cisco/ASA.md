## Generate RSA key for SSH by ASDM CLI

```
ASA(config)# crypto key generate rsa [noconfirm]
```

## SLA (Service Level Agreement) monitor

[Reference](https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/118962-configure-asa-00.html)

```
ASA(config)# sla monitor <SLA ID>
ASA(config-sla-monitor)# type echo protocol ipIcmpEcho <IP> interface <interface>
ASA(config-sla-monitor-echo)# num-packets <number of packets>
ASA(config-sla-monitor-echo)# timeout <ms>
ASA(config-sla-monitor-echo)# threshold <ms>
ASA(config-sla-monitor-echo)# frequency <seconds>
ASA(config-sla-monitor-echo)# exit

ASA(config)# sla monitor schedule <SLA ID> life { forever | <seconds> } start-time now
```

### Track route with SLA

當 `<SLA ID>` 狀態正常才啟用 route

Enable route only when `<SLA ID>` is OK

```
ASA(config)# track <track ID> rtr <SLA ID> reachability
ASA(config)# route <interface> <IP> <netmask> <gateway> [<metric>] track <track ID>
```

## Event manager

[Reference](https://www.cisco.com/c/en/us/support/docs/security/adaptive-security-appliance-asa-software/117883-config-eem-00.html)

Execute specified command on specified event

在指定的情況下執行指定的指令

```
ASA(config)# [no] event manager applet <name>
ASA(config-applet)# [no] description <text>
```

### Manual event

Required for manually run

```
ASA(config-applet)# [no] event none
```

### Syslog event

```
ASA(config-applet)# [no] event syslog id <start ID>[-<end ID>] [occurs <times>] [period <seconds>]
```

### Periodic event

#### Absolute event

```
ASA(config-applet)# [no] event timer absolute time <hh:mm:ss>
```

#### Countdown event

Execute once only

只執行一次

```
ASA(config-applet)# [no] event timer countdown time <seconds>
```

#### Watchdog event

Repeat execute every `<seconds>`

每隔 `<seconds>` 執行

```
ASA(config-applet)# [no] event timer watchdog time <seconds>
```

### Action

```
ASA(config-applet)# [no] action [<action number>] cli command "<command>"
```

### Output

```
ASA(config-applet)# [no] output {
    none |
    console |
    file {
        new |
        rotate <number> |
        overwrite <file name> |
        append <file name>
    }
}
```

### Verify applet

```
ASA# show running-config event manager
```

### Manually run applet

Require configured with `event none`
```
ASA# event manager run <applet>
```

### SSH public key
```
ASA(config)# username <user name> attributes
ASA(config-username)# ssh authentication publickey <public key>
```

### Auto authorization (enable) when login console (Telnet / SSH)
```
ASA(config)# aaa authorization exec LOCAL auto-enable
```

## Threat detection

[Reference](https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/113685-asa-threat-detection.html)

```
ASA# show threat-detection { scanning-threat | rate | statistics [top] }
```

### Show thread detection config

```
ASA# show running-config all threat-detection
```

### Basic threat detection

```
ASA(config)# [no] threat-detection basic-threat
```

### Statistics of host
```
ASA(config)# threat-detection statistics host [number-of-rate <number of rate>]
```

## Capture

[Reference](https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/118097-configure-asa-00.html)

### Capture ASP drop packet
```
ASA# capture <capture ID> type asp-drop [real-time]
```

### Show capture
```
ASA# show capture <capture ID>
```

### Download capture

```
https://<IP>/admin/capture/<capture ID>/pcap
```

### Copy capture

```
ASA# copy /pcap capture:<capture ID> {tftp|scp}://<IP>
```
