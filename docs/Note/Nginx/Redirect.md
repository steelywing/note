# Redirect / Rewrite

> [Ref](https://www.nginx.com/blog/creating-nginx-rewrite-rules/)

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

## Redirect all to correct domain name

```nginx
server {
    listen 80 default_server;
    listen 443 ssl default_server;
    # Use the underscore to avoid matching a real domain name 
    server_name _;
    return 301 $scheme://www.example.com;
}
```
