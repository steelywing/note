Ubuntu sharing desktop disable encryption ([reference](https://askubuntu.com/a/487267/235264))

```sh
dconf-editor
# org > gnome > desktop > remote-accessand > require-encryption

# or
gsettings set org.gnome.Vino require-encryption false
```
