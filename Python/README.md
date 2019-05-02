# Access attribute using string

```python
getattr(object, name, default=None)
hasattr(object, name)
```

# `pip` - Python Package Installer

[Reference](https://pip.pypa.io/en/stable/)

## CLI
```sh
pip
python -m pip
```

## Install package
```sh
pip install <package>
```

## Uninstall package
```sh
pip uninstall <package>
```

## List installed package
```sh
pip list
```

## Download package
```sh
pip download <package>
```

## Install downloaded package
```sh
pip install --no-index --find-links <directory> <package>
```

## Export `requirements.txt`
```sh
pip freeze > requirements.txt
```

## Install `requirements.txt`
```sh
pip install -r requirements.txt
```