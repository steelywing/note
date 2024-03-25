---
sidebar_label: Debug
---

# Debug - Nginx

Using response

```nginx
server {
    # ...

    default_type text/plain;

    # return <status> "<response>";
    return 200 "$uri";
}
```

Using header

:::note

`add_header` is inherited from the parent level only if there are no `add_header` on the current level

:::

```nginx
server {
    # add_header <name> "<value>" [always];
    add_header X-Debug "$uri" always;
}
```

Using log

```nginx
server {
    # log_format <name> "<format>";
    log_format debug "$uri";
    access_log /var/log/nginx/debug.log debug;
}
```
