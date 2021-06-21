## HPE Smart Storage Administrator CLI

[Reference](https://wiki.phoenixlzx.com/page/ssacli/)

## Help
```bash
ssacli [ctrl] help [ show | create | modify ]
```

## Abbreviation
| Abbreviation | Full |
| - | - |
| `ctrl` | `controller` |
| `pd` | `physicaldrive` |
| `ld` | `logicaldrive` |

## Controller

### Controller info
```bash
ssacli ctrl { all | slot=<slot ID> } show [ config | detail | status ]
```

## Rescan drive
```bash
ssacli rescan
```

## Physical drive info
```bash
ssacli ctrl slot=<slot ID> pd { all | allunassigned | <port>:<box>:<bay> } show [ status | detail ]
```

## Logical drive

### Logical drive info
```bash
ssacli ctrl slot=<slot ID> ld { all | <ID> } show [ status | detail ]
```

### Create logical drive
```bash
ssacli ctrl slot=<slot ID> create type=ld drives={all|allunassigned|<port>:<box>:<bay>,<port>:<box>:<bay>,...} [raid={0|1|1+0|5|50|6|60}] [size={<MB>|min|max|maxmbr}]
```

### Delete logical drive
```bash
ssacli ctrl slot=<slot ID> ld <ID> delete
```
