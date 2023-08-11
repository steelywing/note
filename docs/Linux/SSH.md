# SSH

## [SSH tunnel](SSH-Tunnel.md)

## Copy SSH public key to remote host

```bash
ssh-copy-id [<options>] <host>
```

| Option | Description |
| - | - |
| `-i <id_rsa.pub>` | The public key file to be copy, default is `~/.ssh/id*.pub`
| `-p <port>` | TCP port |
| `"-o IdentityFile <id_rsa>"` | Use `<id_rsa>` key file to connect remote host |

## SSH agent

For `sh` / `bash`

```bash
eval $(ssh-agent -s)
```

For `csh` / `fish`

```bash
eval (ssh-agent -c)
```

### Add SSH private key

```bash
ssh-add <private key path>
```

## Troubleshoot

```
Unable to negotiate with XXX.XXX.XXX.XXX port XX: no matching host key type found. Their offer: ssh-rsa,ssh-dss
```

Method 1

```config title="/etc/ssh/ssh_config"
HostKeyAlgorithms +ssh-rsa
PubkeyAcceptedAlgorithms +ssh-rsa
```

Method 2

```config title="~/.ssh/config"
HostKeyAlgorithms +ssh-rsa
PubkeyAcceptedAlgorithms +ssh-rsa
```

Method 3

```config title="~/.ssh/config"
Host { <host IP address / host name> | * }
    HostkeyAlgorithms +ssh-rsa
    PubkeyAcceptedAlgorithms +ssh-rsa
```
