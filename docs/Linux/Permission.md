# Permission

[Reference](https://wiki.archlinux.org/index.php/File_permissions_and_attributes)

| Permission | Effect on file | Effect on directory |
| - | - | - |
| `r` | Read | List directory's contents  |
| `w` | Write | Create, Rename, Delete directory's contents |
| `x` | Execute | Access (Read, Write, Execute) directory's contents<br/><br/> *If any directory in the path does not have the `x` bit set, the final file or folder cannot be accessed either, regardless of its permissions* |
