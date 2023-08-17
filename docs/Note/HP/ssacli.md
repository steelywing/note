# HP RAID `ssacli`

HPE Smart Storage Administrator CLI

> Ref: [PhoenixWiki](https://wiki.phoenixlzx.com/page/ssacli/)

> Ref: [mrpeardotnet gist](https://gist.github.com/mrpeardotnet/a9ce41da99936c0175600f484fa20d03)

```sh
ssacli
```

```sh
# Older version
hpssacli
```

## Help

```sh
help [ show | create | modify ]
```

## Abbreviation

| Abbreviation | Full |
|-|-|
| `ch` | `chassisname` |
| `ctrl` | `controller` |
| `pd` | `physicaldrive` |
| `ld` | `logicaldrive` |
| `dwc` | `drivewritecache` |
| `lk` | `licensekey` |

> Ref: `help shorthand`

## Controller

### Controller info

```sh
# ctrl { all | slot=<slot ID> } show [ config | detail | status ]
ctrl slot=1 show
ctrl all show
ctrl all show status
ctrl all show detail
```

## Rescan drive

```sh
rescan
```

## Physical drive info

```sh
# ctrl slot=<slot ID> pd { all | allunassigned | <port>:<box>:<bay> } show [ status | detail ]
ctrl slot=1 pd all show
ctrl slot=1 pd all show detail
```

## Logical drive

### Logical drive info

```sh
# ctrl slot=<slot ID> ld { all | <ID> } show [ status | detail ]
ctrl slot=1 ld all show
ctrl slot=1 ld all show detail
```

### Create logical drive

```sh
ctrl slot=<slot ID> create type=ld drives={all|allunassigned|<port>:<box>:<bay>,<port>:<box>:<bay>,...} [raid={0|1|1+0|5|50|6|60}] [size={<MB>|min|max|maxmbr}]
```

### Delete logical drive

```sh
ctrl slot=<slot ID> ld <ID> delete
```

## LED blink

```sh
# ctrl slot=<slot ID> ld { all | <ID> } modify led={on|off}
ctrl slot=1 ld all modify led=on
ctrl slot=1 ld all modify led=off
```

## Drive Write Cache

Show Drive Write Cache

```sh
# ctrl slot=<slot ID> modify dwc={?|enable|disable}
ctrl slot=1 modify dwc=?
```

## No Battery Write Cache

```sh
# ctrl slot=<slot ID> modify nbwc={?|enable|disable}

# Show status
ctrl slot=1 modify nbwc=?

# Enable
ctrl slot=1 modify nbwc=enable

# Disable
ctrl slot=1 modify nbwc=disable
```

## Install on VMware

Download

- [ESXi 6.5](https://support.hpe.com/hpesc/public/swd/detail?swItemId=MTX_3307282984634977b4433362c2)
- [ESXi 6.7](https://support.hpe.com/hpesc/public/swd/detail?swItemId=MTX_ff3cd6f9fa774f9ab0b6c834a0)
- [ESXi 7.0](https://support.hpe.com/hpesc/public/swd/detail?swItemId=MTX_6fa9de2f8d1746459c94d2352e)

```sh
# remove old version
esxcli software vib remove -n hpssacli

# install
esxcli software vib install -v "/<full-path.vib>"
```

```sh
/opt/smartstorageadmin/ssacli/bin/ssacli ctrl all show
```
