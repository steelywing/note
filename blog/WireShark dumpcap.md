---
tags: [Capture, Network, WireShark]
---

# WireShark long-term traffic capture

- WireShark is slow when capture large amount of traffic
- WireShark has `dumpcap` command to capture traffic in CLI, that is faster

<!--truncate-->

## List interfaces

```bash
dumpcap -D
```

## Capture

Option | Description
-|-
`-i <interface>` | capture `<interface>`
`-b filesize:<size KB>` | switch to next file after `<size KB>`
`-b duration:<second>` | switch to next file after `<second>` seconds
`-b files:<total>` | replace the oldest file after `<total>` files
`-f <filter>` | filter packet
`-w <file>` | save to `<file>`

```bash
dumpcap -i 1 -b filesize:1000000 -b files:2 -w capture.pcap
```
