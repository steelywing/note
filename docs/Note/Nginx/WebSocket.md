---
tags: [Nginx, Proxy, WebSocket]
---

# WebSocket Proxy - Nginx

Proxy `ws://example.com/ws/` to `ws://localhost:7890/`

```nginx
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}

server {
    listen 80;
    server_name example.com;

    # ...

    location /ws/ {
        proxy_pass http://localhost:7890/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header Host $host;
    }
}
```

> Ref: [Nginx WebSocket](https://www.nginx.com/blog/websocket-nginx/)

Proxy all WebSocket request to `ws://localhost:7890/`

```nginx
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}

server {
    listen 80;
    server_name example.com;

    location /websocket/ {
        internal;

        proxy_pass http://localhost:7890/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
    }

    location / {
        set $websocket 1;
        if ($http_connection !~* "upgrade") {
            set $websocket 0;
        }
        if ($http_upgrade !~* "websocket") {
            set $websocket 0;
        }
        if ($websocket) {
            rewrite ^ /websocket$uri last;
        }

        # ...
    }
}
```
