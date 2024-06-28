# Redirect / Rewrite

> Ref: [Creating NGINX Rewrite Rules](https://www.nginx.com/blog/creating-nginx-rewrite-rules/)

## Redirect HTTP to HTTPS

```nginx
server {
    listen 80;
    server_name example.com;

    return 301 https://www.example.com$request_uri;
    # or
    return 301 https://$host$request_uri;
}
```

See also: [HSTS](../HTTP.md#strict-transport-security)

## Redirect all to correct domain name

```nginx
server {
    listen 80 default_server;
    listen 443 ssl default_server;
    # Use the underscore or empty name to avoid matching a real domain name 
    server_name "";
    return 301 $scheme://www.example.com;
}
```
