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

## Log message before call

```py
def log(message):
    def log_wrapper(func):
        def wrapper(*args, **kwargs):
            print(message)
            return func(*args, **kwargs)
        return wrapper
    return log_wrapper

```

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

```py
world()
# hello
# world
```

## Thread decorator

```py
def thread(function):
    def closure(*args, **kwargs):
        return Thread(target=function, args=args, kwargs=kwargs)

    return closure
```

```py
@thread
def thread_func():
    pass

thread_func().start()
```
