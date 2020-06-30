## Table of Contents

- [Table of Contents](#table-of-contents)
- [Access attribute using string](#access-attribute-using-string)
- [`pip` - PIP Installs Packages](#pip-pip-installs-packages)
- [Formatter](#formatter)
- [Unit test](#unit-test)
  - [Unit test framework](#unit-test-framework)
- [Show `sys.path` (module path) in CLI](#show-syspath-module-path-in-cli)
- [Pass all arguments to another function](#pass-all-arguments-to-another-function)

## Access attribute using string

```python
getattr(object, name, default=None)
hasattr(object, name)
```

## `pip` - PIP Installs Packages

[Reference](https://pip.pypa.io/en/stable/)

CLI
```bash
pip
python -m pip
```

Install package
```bash
pip install <package>
```

Uninstall package
```bash
pip uninstall <package>
```

List installed package
```bash
pip list
```

Download package
```bash
pip download <package>
```

Install downloaded package
```bash
pip install --no-index --find-links <directory> <package>
```

Export `requirements.txt`
```bash
pip freeze > requirements.txt
```

Install `requirements.txt`
```bash
pip install -r requirements.txt
```

## Formatter

- [`black`](https://github.com/psf/black) (Recommended)
- [`autopep8`](https://github.com/hhatto/autopep8)
- [`YAPF`](https://github.com/google/yapf)

## Unit test

[`pytest` reference](https://pytest.readthedocs.io/en/latest/goodpractices.html) / [Reference](https://docs.python.org/3/library/unittest.html)

```
module/
    lib/
        __init__.py
        module.py
    tests/
        test_module.py
```

```python
# test_module.py

import unittest
from lib import module

class TestModule(unittest.TestCase):
    def test_module(self):
        pass

if __name__ == '__main__':
    unittest.main()
```

```bash
# In /module/ folder
python -m tests.test_module
```

### Unit test framework

- [nose](https://nose.readthedocs.org/en/latest/)
- [nose2](https://docs.nose2.io/en/latest/)
- [pytest](https://pytest.readthedocs.io/en/latest/contents.html)

## Show `sys.path` (module path) in CLI

```bash
python -m site
```

## Pass all arguments to another function

```py
class List(list):
    def append_twice(self, *args, **kwargs):
        self.append(*args, **kwargs)
        self.append(*args, **kwargs)
```
