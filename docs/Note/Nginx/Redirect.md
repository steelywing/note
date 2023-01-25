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
## `internal` location

```nginx
location ... {
    internal;
}
```

- can only be accessed from internal requests
- return error status `404` if that is external requests

## Internal request / Internal redirect

Internal requests are requests by:

- `rewrite` directive
- `error_page`, `index`, `random_index`, and `try_files` directives
- `X-Accel-Redirect` response header field from an upstream server
- “include virtual” command of the `ngx_http_ssi_module` module, by the `ngx_http_addition_module` module directives, and by `auth_request` and `mirror` directives;
