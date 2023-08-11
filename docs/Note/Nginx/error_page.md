# `error_page`

```nginx
location / {
    # error_page <status> ... <URI>;
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
}
```

- If `<URI>` is start with `/`, Nginx internal redirect the URI
- If `<URI>` is not start with `/`, Nginx return redirect to client
