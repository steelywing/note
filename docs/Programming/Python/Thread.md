---
sidebar_label: Thread
---

# Thread - Python

```py
from time import sleep
from threading import Thread


def run(times):
    for i in range(times):
        sleep(1)
        print(f"Thread: {i}")


# Create new thread and start
Thread(target=run, args=(4,)).start()

for i in range(2):
    sleep(1)
    print(f"Main: {i}")
```

```
Thread: 0
Main: 0
Thread: 1
Main: 1
Thread: 2
Thread: 3
```

## Daemon

Python will not exit when there are alive non-daemon threads.

```py
from time import sleep
from threading import Thread


def delay_print(delay, message):
    sleep(delay)
    print(message)


Thread(target=delay_print, args=(4, "daemon end"), daemon=True).start()
Thread(target=delay_print, args=(2, "non-daemon end"), daemon=False).start()
```

```
non-daemon end
```

## Class `Thread`

```py
from time import sleep
from threading import Thread


class Run(Thread):
    def __init__(self, id, delay):
        super().__init__()
        self.id = id
        self.delay = delay

    def run(self):
        sleep(self.delay)
        print(f"Thread {self.id} end")


threads = []
for i in range(5):
    threads.append(Run(i, i))
    threads[-1].start()

# Wait all threads finish
for thread in threads:
    thread.join()

print("Main end")
```

```
Thread 0 end
Thread 1 end
Thread 2 end
Thread 3 end
Thread 4 end
Main end
```

## Lock

```py
from time import sleep
from threading import Lock, Thread


def thread():
    with lock:
        print("Thread acquired lock")
        sleep(4)
    print("Thread released lock")


lock = Lock()
Thread(target=thread).start()

print("Main waiting lock release")
with lock:
    print("Main acquired lock")
print("Main released lock")
```

```
Thread acquired lock
Main waiting lock
Thread released lock
Main acquired lock
Main released lock
```

---

```py
with lock:
    # ...
```

is equivalent to

```py
lock.acquire()
try:
    # ...
finally:
    lock.release()
```

## Thread Decorator

See [Thread Decorator](Decorator.md#thread-decorator)
