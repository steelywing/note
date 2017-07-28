Ubuntu sharing desktop disable encryption ([reference](https://askubuntu.com/a/487267/235264))

```sh
dconf-editor
# org > gnome > desktop > remote-accessand > require-encryption

# or
gsettings set org.gnome.Vino require-encryption false
```

Open file manager from CLI

```sh
xdg-open <path>
```

Remove current session bash history
```sh
unset HISTFILE
# or
kill -9 $$
# $$ == Current shell PID
```

Delete all bash history
```sh
# For Bash
history -c
# or
echo > $HISTFILE
# or
HISTSIZE=0
```

Grub
```sh
# Find all OS, update Grub config, install Grub
update-grub

# Auto-Generate Grub config path
vi /boot/grub/grub.cfg

# Grub option
vi /etc/default/grub
```
