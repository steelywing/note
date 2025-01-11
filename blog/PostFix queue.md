---
date: 2025-01-12
tags: [PosFix, SMTP, Email]
---

# PostFix queue

When PostFix failed to connect to SMTP server, it will queue the message and retry later.

<!-- truncate -->

## Print queue

```sh
postqueue -p
```

## Delete queue

```sh
postsuper -d { ALL | <Queue ID> }
```
