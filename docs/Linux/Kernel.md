# Kernel

## Kernel info

```bash
uname -a
```

## Kernel module

> `module-name` is same as `module_name`

### List module

```bash
lsmod
```

### Add module

```bash
insmod <module>
```

### Remove module

```bash
rmmod <module>
```

### Add module and dependencies

```bash
modprobe <module>
```

### Remove module and dependencies

```bash
modprobe -r <module>
```

### Blacklist module

In `/etc/modprobe.d/*.conf`

```
blacklist <module>
```

### Blacklist module even other modules depend on it

In `/etc/modprobe.d/*.conf`

```apacheconf
install <module> /bin/false
```
