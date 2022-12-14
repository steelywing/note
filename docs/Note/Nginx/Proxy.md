---
tags: [Nginx, Proxy]
---

# Proxy

```nginx
proxy_pass <scheme>://<host>[:port][/<URI>];
```

:::note Reference

[Nginx reverse proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)

:::

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

[WebSocket Proxy](WebSocket.md)

## Load balancing

[Load balancing](LoadBalancing.md)

## Real (Client) IP address

Set `$remote_addr` and `$remote_port` using header

```nginx
# set_real_ip_from  <proxy server IP address>[/<CIDR>];
# Trusted address
set_real_ip_from  10.0.0.1;

# by default, Nginx use X-Real-IP header to set $remote_addr

# Use X-Forwarded-For header to set $remote_addr
real_ip_header    X-Forwarded-For;
real_ip_recursive on;

# Use X-Real-IP header to set $remote_addr
real_ip_header    X-Real-IP;
```

:::note Reference

[ngx_http_realip_module](https://nginx.org/en/docs/http/ngx_http_realip_module.html)

:::
