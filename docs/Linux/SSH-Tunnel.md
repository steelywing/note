# SSH tunnel

SSH tunnel / Port forward

On SSH server, check `AllowTcpForwarding` is allow (`yes`), default is allow.

```text title="/etc/ssh/sshd_config"
AllowTcpForwarding yes
```

## Option

On SSH client

```bash
ssh [<option>] [<user>@]<SSH remote server host>
```

| Option | Description |
| - | - |
| `-N` | Do not execute a remote command |
| `-f` | Run in background |
| `-p <port>` | Port to connect to on the remote host |

---

## SSH client ➡ SSH server

```bash
-L [<SSH client bind address>:]<SSH client port>:<remote server host>:<remote server port>
```

Port forward from `<SSH client port>` to `<remote server host>:<remote server port>`

- If bind address is empty or `*` (`[*]:<port>:<host>:<port>`), will bind to all interfaces.

## SSH server ➡ SSH client

```bash
-R [<SSH server bind address>:]<SSH server port>:<local server host>:<local server port>
```

Port forward from `<SSH server port>` to `<local server host>:<local server port>`

- If bind address is empty or `*` (`[*]:<port>:<host>:<port>`), will bind to all interfaces.

- If no bind address colon (`<port>:<host>:<port>`), will bind to loopback interface.

## SOCKS

Dynamic forward from local to remote

```bash
ssh -D [<local bind address>:]<local port> <user>@<SSH server>
```

## Example

![SSH Tunnel](img/SSH&#32;Tunnel.png)

Forward *SSH Client TCP port* ➡ *SSH Server* (NAT) ➡ *Destination address port*

- ```bash
  # SSH Client
  ssh -L :8000:10.0.2.2:80 10.0.1.2
  ```

- On *Client*, open `http://10.0.0.2:8000/`, will port forward to *Remote Server* `http://10.0.2.2:80/`

### SSH tunnel on `localhost`

Forward *SSH Server TCP port* (NAT) ➡ *Destination address port*

- ```bash
  # SSH Remote Server
  ssh -L 8000:10.0.2.2:80 127.0.0.1
  ```

- On *SSH Client*, open `http://10.0.1.2:8000/`, will port forward to *Remote Server* `http://10.0.2.2:80/`

### SSH reverse tunnel

Forward *SSH Server TCP port* ➡ *SSH Client* (NAT) ➡ *Destination address port*

![SSH Reverse Tunnel](img/SSH&#32;Reverse&#32;Tunnel.png)

- Enable `GatewayPorts` on SSH server
  ```
  # /etc/ssh/sshd_config
  GatewayPorts yes
  ```
- ```bash
  # SSH Client
  ssh -R :8000:10.0.2.2:80 10.0.1.1
  ```

- On *SSH Server*, open `http://127.0.0.1:8000/` or `http://10.0.1.2:80/`, will port forward to *Server* `http://10.0.2.2:80/`

