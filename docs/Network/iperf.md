# `iperf`

[iperf2](https://sourceforge.net/projects/iperf2/)

- Multi-thread
- Support multi-cast
- Official support Windows

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


[iperf3](https://github.com/esnet/iperf)

- Single-thread

[Comparison](https://fasterdata.es.net/performance-testing/network-troubleshooting-tools/iperf/)
