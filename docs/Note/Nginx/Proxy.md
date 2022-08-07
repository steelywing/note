# Proxy

> [Ref](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)

```nginx
proxy_pass <scheme>://<host>[:port][/<URI>];
```

## `proxy_pass` with URI

```nginx
location /path/ {
    proxy_pass http://www.example.com/app/;
}
```

- Request `/path/page.html` will be proxy to `http://www.example.com/app/page.html`
- Prefix `/path/` will be replaced by `/app/`

## `proxy_pass` without URI

```nginx
location /path/ {
    proxy_pass http://www.example.com;
}
```

- Request `/path/page.html` will be proxy to `http://www.example.com/path/page.html`

## Header

> [`X-Forwarded-For`](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#var_proxy_add_x_forwarded_for)

```nginx
location / {
    # Set "Host" header to the $host in request
    proxy_set_header Host $host;

    # Set "X-Real-IP" header to client IP address
    proxy_set_header X-Real-IP $remote_addr;

    # Add client IP address to "X-Forwarded-For" header
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    
    proxy_pass http://localhost:8000;
}
```

## Error

```log
an upstream response is buffered to a temporary file /var/cache/nginx/proxy_temp/XXXXXX while reading upstream
```

> [Ref](https://support.f5.com/csp/article/K48373902)

- Method 1
  
  Increase both parameters by factor of two until warning stop appearing

```nginx
location / {
    proxy_buffers 16 16k;
    proxy_buffer_size 16k;

    proxy_pass http://localhost:8000;
}
```

- Method 2
  
  Disable buffering

```nginx
location / {
    proxy_buffering off;

    proxy_pass http://localhost:8000;
}
```

## Load balancing

> [Ref](http://nginx.org/en/docs/http/load_balancing.html)

```nginx
upstream backends {
    # Method 1 (Default)
    # round-robin

    # Method 2
    # request is assigned to least-connected server
    least_conn;

    # Method 3
    # based on the client IP address
    ip_hash;

    # default <weight> = 1
    # server <host> [weight=<weight>]
    server 10.0.0.1:80 weight=4;
    server 10.0.0.2:80;
    # ...
}

server {
    listen 80;
    server_name www.example.com;

    location / {
        proxy_pass http://backends;
    }
}
```

## SSL/TLS offloading

> [Ref](https://www.nginx.com/blog/nginx-ssl/)

```nginx
server {
    listen 443 ssl;
    server_name www.example.com;

    # The certificate file
    # Support chained certificate
    ssl_certificate www.example.com.crt;

    # The private key file
    ssl_certificate_key www.example.com.key;

    location / {
        proxy_pass http://10.0.0.1;
    }
}
```

## WebSocket

> [Ref](https://www.nginx.com/blog/websocket-nginx/)

Proxy `ws://example.com/ws/` to `ws://localhost:7890/`

:::note

`[Go Access](https://goaccess.io/)` config

:::

```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        # ...
    }

    location /ws/ {
        proxy_pass http://localhost:7890/;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
```
