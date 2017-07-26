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
history -c
# or
HISTSIZE=0
```
