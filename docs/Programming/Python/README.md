---
slug: .
---

# Python

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

Download `requirements.txt`
```bash
pip download -r requirements.txt
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

## Decorator

> [Reference](https://www.python.org/dev/peps/pep-0318/)

```py
@decorator
def run():
    pass
```

is equivalent to

```py
def run():
    pass
run = decorator(run)
```

```py
from functools import wraps

def decorator(func):
    # Using original func name and doc string
    @wraps(func)
    def wrap():
        print("[Before]")
        func()
        print("[After]")
    return wrap

@decorator
def run():
    print("Run")

run()

# [Before]
# Run
# [After]
```

## Bind `self` to function

> [Reference](https://docs.python.org/3/howto/descriptor.html#functions-and-methods)

```py
import types

def power(self, exp):
    return pow(self, exp)

power2 = types.MethodType(power, 2)
print(power2(8)) # 256
```

## Follow file

Follow file changed / appended data

```py
from io import SEEK_CUR, SEEK_END, SEEK_SET
from typing import Iterator, TextIO
import sys


def follow(file: TextIO, interval: float = 0.2) -> Iterator[str]:
    from time import sleep
    line = ''
    while True:
        new = file.readline()
        if new == "":
            sleep(interval)
            continue
        line += new
        if not line.endswith("\n"):
            continue
        yield line[:-1]
        line = ''


if __name__ == '__main__':
    with open("access.log", 'r') as file:
        file.seek(0, SEEK_END)
        for line in follow(file):
            print(line)
```

## Is iterable ?

```py
from collections.abc import Iterable

isinstance(e, Iterable):
```
