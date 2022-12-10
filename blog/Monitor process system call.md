---
tags: [Linux, Debug, Monitor]
---

# Monitor process system call

Trace / Monitor process system call In Linux

<!--truncate-->

```bash title="Syntax"
# <system call> = { open | close | read | write | ... }
strace [-e trace={<system call>[,...]}] -p <PID>
```

To trace `apache2` process

```bash title="Syntax"
strace -p $(pidof -s apache2)
```
