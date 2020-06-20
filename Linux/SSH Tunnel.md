# SSH tunnel / Port forward

On SSH server, check `AllowTcpForwarding` is allow, default is allow.

On SSH client

```sh
ssh [<option>] [<user>@]<SSH remote server host>
```

| Option | Description |
| - | - |
| `-N` | Do not execute a remote command |
| `-f` | Run in background |
| `-p <port>` | Port to connect to on the remote host |
| `-L [<SSH client bind address>:]<SSH client port>:<remote server host>:<remote server port>` | Port forward from `<SSH client port>` to `<remote server host>:<remote server port>` |
| `-R [<SSH server bind address>:]<SSH server port>:<local server host>:<local server port>` | Port forward from `<SSH server port>` to `<local server host>:<local server port>` |

If bind address is empty (`:<port>:<host>:<port>`), will bind to all interfaces.

If no bind address colon (`<port>:<host>:<port>`), will bind to loopback interface.

## Example

![SSH Tunnel](img/SSH&#32;Tunnel.png)

- ```sh
  # SSH Client
  ssh -L :8000:10.0.2.2:80 10.0.1.2
  ```

- On *Client*, open `http://10.0.0.2:8000/`, will port forward to *Remote Server* `http://10.0.2.2:80/`

## SSH tunnel on `localhost`

- ```sh
  # SSH Remote Server
  ssh -L 8000:10.0.2.2:80 127.0.0.1
  ```

- On *SSH Client*, open `http://10.0.1.2:8000/`, will port forward to *Remote Server* `http://10.0.2.2:80/`

## SSH reverse tunnel

![SSH Reverse Tunnel](img/SSH&#32;Reverse&#32;Tunnel.png)

- Enable SSH `GatewayPorts`
  ```
  # /etc/ssh/sshd_config
  GatewayPorts yes
  ```
- ```sh
  # SSH Client
  ssh -R :8000:10.0.2.2:80 10.0.1.1
  ```

- On *SSH Server*, open `http://127.0.0.1:8000/`, will port forward to *Server* `http://10.0.2.2:80/`
