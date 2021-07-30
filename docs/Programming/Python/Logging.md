# Logging - Python

> [How To](https://docs.python.org/3/howto/logging.html)


```py
import logging

LOG_FILE = "/var/log/python.log"

# get a module-level logger
logger = logging.getLogger(__name__)

# get the root logger
logger = logging.getLogger()

# specifies the lowest-severity the logger will handle
# DEBUG < INFO < WARNING < ERROR < CRITICAL
logger.setLevel(logging.DEBUG)

# output log to console
handler = logging.StreamHandler()
handler.setFormatter(logging.Formatter("%(message)s"))
logger.addHandler(handler)

# output log to file
handler = logging.FileHandler(LOG_FILE)
handler.setFormatter(logging.Formatter("%(asctime)s %(message)s"))
logger.addHandler(handler)
```

```py
import logging

logger = logging.getLogger()

logger.debug('debug message')
logger.info('info message')
logger.warning('warn message')
logger.error('error message')
logger.critical('critical message')
```

## Color Logging

> [Reference](https://stackoverflow.com/a/56944256)

`ColorFormatter.py`

```py
import logging

class ColorFormatter(logging.Formatter):
    """Color logging.Formatter"""

    COLORS = {
        # Blue
        logging.INFO: "\033[34m",
        # Yellow
        logging.WARNING: "\033[33m",
        # Red
        logging.ERROR: "\033[31m",
        # Red
        logging.CRITICAL: "\033[31m",
    }
    RESET = "\033[0m"

    def __init__(self, fmt=None, *args, **kwargs):
        super().__init__(fmt, *args, **kwargs)
        self.formatters = {}
        # Create formatters for each level
        for level, color in self.COLORS.items():
            self.formatters[level] = logging.Formatter(
                "{}{}{}".format(color, fmt, self.RESET),
                *args,
                **kwargs
            )

    def format(self, record):
        if record.levelno in self.formatters:
            return self.formatters[record.levelno].format(record)
        return super().format(record)
```

```py
import logging
from ColorFormatter import ColorFormatter

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

handler = logging.StreamHandler()
handler.setFormatter(ColorFormatter("%(message)s"))
logger.addHandler(handler)
```
