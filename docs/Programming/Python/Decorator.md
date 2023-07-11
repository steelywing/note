# Decorator

```py
def decorator(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper
```

---

```py
@decorator
def func():
    pass
```

is roughly equivalent to

```py
def func():
    pass

func = decorator(func)
```

## Log message before function

```py
def log(message):
    def log_wrapper(func):
        def wrapper(*args, **kwargs):
            print(message)
            return func(*args, **kwargs)
        return wrapper
    return log_wrapper
```

---

```py
@log('hello')
def world():
    print('world')
```

is roughly equivalent to

```py
def world():
    print('world')

world = log('hello')(world)
```

---

```py
world()
# hello
# world
```

## Thread decorator

```py
from threading import Thread

def thread(function):
    def wrapper(*args, **kwargs):
        return Thread(target=function, args=args, kwargs=kwargs)

    return wrapper
```

```py
@thread
def thread_function():
    pass

thread_function().start()
```

with return value

```py
from threading import Thread
from functools import partial

class ThreadFunction(Thread):
    def __init__(self, target, args = (), kwargs = {}):
        super().__init__()
        self.target = partial(target, *args, **kwargs)
        # function return value
        self.value = None
    def run(self):
        self.value = self.target()

def thread(function):
    def wrapper(*args, **kwargs):
        return ThreadFunction(target=function, args=args, kwargs=kwargs)

    return wrapper
```

```py
@thread
def hello(name):
    return 'hello ' + name

hello_thread = hello('world')
hello_thread.start()
hello_thread.join()

print(hello_thread.value)
```
