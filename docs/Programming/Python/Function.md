# Function - Python

## Bind arguments / parameters

```py
from functools import partial

def hello(name):
    return f"Hello {name}"

f = partial(hello, "World")
print(f()) # Hello World
```

```py
# implementation of functools.partial

def partial(function, *p_args, **p_kwargs):
    def closure(*args, **kwargs):
        return function(*p_args, *args, **p_kwargs, **kwargs)
    return closure
```

## Bind object to function (method)

```py
import types

def hello(self):
    return f"Hello {self.name}"

class Name:
    def __init__(self, name):
        self.name = name

world = Name("World")

# bind world to hello
hello_world = types.MethodType(hello, world)
print(hello_world()) # Hello World
```
