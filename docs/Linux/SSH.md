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
