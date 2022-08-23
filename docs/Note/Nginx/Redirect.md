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

## Internal request / Internal redirect

- only allow access for internal requests
- return error `404` for external requests

```nginx
location ... {
    internal;
}
```

Internal requests are requests by:
- `rewrite` directive
- `error_page`, `index`, `random_index`, and `try_files` directives
- `X-Accel-Redirect` response header field from an upstream server
- “include virtual” command of the `ngx_http_ssi_module` module, by the `ngx_http_addition_module` module directives, and by `auth_request` and `mirror` directives;
