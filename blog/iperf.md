---
tags: [Speed Test, Network]
---

# iperf network speed test

Use `iperf` to test / measure network speed / bandwidth / throughput

<!--truncate-->

## `iperf2`

[Download](https://sourceforge.net/projects/iperf2/)

- Multi-thread
- Support multi-cast
- Official support Windows

## `iperf3`

[Download](https://github.com/esnet/iperf)

- Single-thread

## Comparison

> [`iperf2` / `iperf3` comparison](https://fasterdata.es.net/performance-testing/network-troubleshooting-tools/iperf/)

## Test using TCP

```bash title="Server"
iperf -s -w1M -i2
```

```bash title="Client"
iperf -c <server IP address> -w1M -i2
```

## Test using UDP

```bash title="Server"
iperf -u -s -w1M -i2
```

```bash title="Client"
iperf -u -b 10M -c <server IP address> -w1M -i2
```

## Syntax

```bash
iperf <option>
```

Option | Description
-|-
`-s` | run server
`-D` | run server as daemon
`-c <host>` | run client, connect to server `<host>`
`-w <size>{K¦M}` | set TCP window size, suggest &gt; 1M
`-u` | use UDP
`-b <bandwidth>{K¦M}` | set bandwidth, required for UDP
`-p <port>` | use port `<port>`
`-i <second>` | show report per `<second>`
`-d` ¦ `--dualtest` | bi-directional test
`-t <second>` | run `<second>` test
`--reverse` | reverse test (client receive, server send)
