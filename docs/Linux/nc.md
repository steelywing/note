# `nc`

AKA `netcat`

## Test TCP / UDP connection

Host A (10.0.0.1) listen on port 8080

```sh
# nc [-u] -l <port>
# -u: use UDP
nc -l 8080
```

Host B connect to Host A port 8080

```sh
# nc [-u] <host> <port>
nc 10.0.0.1 8080
```
